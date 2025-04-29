---
title: "Hệ thống phân tántán"
date: "2025-04-29"
updated: "2025-04-29"
categories:
  - "sveltekit"
  - "markdown"
coverImage: "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: Check out how heading links work with this starter in this post.
---
- Website trường đại học: sinh viên gửi yêu cầu tra cứu điểm (client), server xử lý và trả kết quả.
- Gmail: trình duyệt là client, server Google phản hồi email.

---

### 2. **Peer-to-Peer (P2P)**

> Mỗi nút trong mạng đều có thể vừa làm client vừa làm server. Không có server trung tâm.

**Ví dụ**:  
- BitTorrent: chia sẻ file giữa người dùng.
- Blockchain (Bitcoin, Ethereum): các nút đều xử lý và lưu dữ liệu.

---

### 3. **Microservices**

> Ứng dụng được chia nhỏ thành nhiều dịch vụ độc lập, mỗi dịch vụ thực hiện 1 chức năng riêng.

**Ví dụ**:  
- Netflix: mỗi phần như thanh toán, phát video, quản lý người dùng là một microservice.
- Shopee: service đơn hàng, ví điện tử, vận chuyển, tìm kiếm.

---

### 4. **Event-Driven Architecture**

> Các thành phần trong hệ thống giao tiếp bằng cách phát và xử lý sự kiện.

**Ví dụ**:  
- Hệ thống thông báo của Facebook: khi ai đó like ảnh, hệ thống phát sự kiện → trigger thông báo.
- Đặt hàng Lazada: sự kiện đặt hàng phát sinh, các service thanh toán, kho hàng, vận chuyển lần lượt được gọi.

---

### 5. **Lambda Architecture**

> Kiến trúc kết hợp xử lý dữ liệu real-time (stream) và batch (theo lô) để đảm bảo vừa nhanh vừa chính xác.

**Ví dụ**:  
- Hệ thống thống kê video YouTube: xử lý view theo thời gian thực (real-time), đồng thời tổng hợp báo cáo hàng ngày (batch).
- Hệ thống fraud detection của ngân hàng: kết hợp dòng dữ liệu giao dịch thật thời và batch data để phát hiện gian lận.

---

### 6. **Serverless Architecture**

> Không cần quản lý server – chỉ cần viết function, hạ tầng do cloud tự lo.

**Ví dụ**:  
- AWS Lambda: tự động chạy code khi có sự kiện (upload ảnh, gửi email).
- Ứng dụng web tĩnh sử dụng Netlify Functions.

---

### 7. **Edge Computing**

> Dữ liệu được xử lý gần nơi nó được tạo ra (gần người dùng), thay vì gửi về server trung tâm.

**Ví dụ**:  
- Xe tự lái Tesla: xử lý cảm biến ngay trên xe để phản ứng kịp thời.
- Ứng dụng nhà thông minh (Google Nest): xử lý giọng nói hoặc tín hiệu ánh sáng ngay tại thiết bị.

---



Lorem ipsum dolor sit amet