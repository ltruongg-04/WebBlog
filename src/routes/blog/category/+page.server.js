export const load = async ({ url, fetch }) => {
	try {
		const res = await fetch(`${url.origin}/api/posts.json`);

		// Nếu server trả về lỗi, quăng lỗi để bắt ở catch
		if (!res.ok) {
			throw new Error(`Failed to fetch posts: ${res.status}`);
		}

		let posts = await res.json();

		// Nếu posts không phải mảng, coi như lỗi
		if (!Array.isArray(posts)) {
			throw new Error('Posts data is not an array');
		}

		let uniqueCategories = {};

		posts.forEach(post => {
			// Nếu post.categories không phải array, bỏ qua bài đó
			if (!Array.isArray(post.categories)) return;

			post.categories.forEach(category => {
				if (uniqueCategories.hasOwnProperty(category)) {
					uniqueCategories[category].count += 1;
				} else {
					uniqueCategories[category] = {
						title: category,
						count: 1
					};
				}
			});
		});

		const sortedUniqueCategories = 
			Object.values(uniqueCategories)
				.sort((a, b) => a.title.localeCompare(b.title)); // dùng localeCompare để sort chữ

		return { 
			uniqueCategories: sortedUniqueCategories
		};

	} catch (error) {
		console.error('Error loading categories:', error);

		// Khi có lỗi, trả về mảng rỗng
		return { 
			uniqueCategories: [] 
		};
	}
};
