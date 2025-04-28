# 1. Hệ thống phân tán là gì?

Hệ thống phân tán (Distributed System) là tập hợp các máy tính độc lập, phối hợp với nhau để đạt được một mục tiêu chung, được người dùng nhìn nhận như một hệ thống thống nhất. Các thành phần trong hệ thống này giao tiếp qua mạng và phối hợp để thực hiện các tác vụ.

# 2. Các ứng dụng của hệ thống phân tán

Hệ thống phân tán được ứng dụng rộng rãi trong nhiều lĩnh vực:

- Dịch vụ web và ứng dụng web: Các nền tảng như Google, Facebook, Amazon sử dụng hệ thống phân tán để xử lý hàng triệu yêu cầu mỗi giây.​

- Mạng viễn thông: Hệ thống điện thoại di động và VoIP dựa trên kiến trúc phân tán để đảm bảo liên lạc liên tục.​

- Hệ thống thời gian thực: Ứng dụng trong giao thông, tài chính, trò chơi trực tuyến yêu cầu phản hồi nhanh và độ tin cậy cao.​

- Cơ sở dữ liệu phân tán: Lưu trữ và quản lý dữ liệu trên nhiều máy chủ để tăng khả năng mở rộng và độ tin cậy.

# 3. Các khái niệm chính của hệ thống phân tán

- **Scalability** (Khả năng mở rộng): Khả năng hệ thống xử lý khối lượng công việc tăng lên bằng cách thêm tài nguyên.​

- **Fault Tolerance** (Khả năng chịu lỗi): Khả năng hệ thống tiếp tục hoạt động khi một phần bị lỗi.​

- **Availability** (Khả dụng): Mức độ hệ thống sẵn sàng phục vụ người dùng.​

- **Transparency** (Tính trong suốt): Người dùng không cần biết về sự phân tán của hệ thống.​

- **Concurrency** (Tính đồng thời): Khả năng xử lý nhiều tác vụ cùng lúc.​

- **Parallelism** (Tính song song): Thực hiện nhiều tác vụ đồng thời để tăng hiệu suất.​

- **Openness** (Tính mở): Hệ thống có thể mở rộng và tương thích với các hệ thống khác.​

- **Vertical Scaling** (Mở rộng theo chiều dọc): Tăng khả năng xử lý bằng cách nâng cấp phần cứng.​

- **Horizontal Scaling** (Mở rộng theo chiều ngang): Tăng khả năng xử lý bằng cách thêm nhiều máy chủ.​

- **Load Balancer** (Cân bằng tải): Phân phối công việc đều giữa các máy chủ để tối ưu hiệu suất.​

- **Replication** (Sao chép dữ liệu): Tạo bản sao dữ liệu để tăng độ tin cậy và khả dụng.​

### Ví dụ minh họa
**Hệ thống thương mại điện tử (E-commerce Platform)** 

Một nền tảng thương mại điện tử lớn như Amazon sử dụng hệ thống phân tán để xử lý hàng triệu giao dịch mỗi ngày. Hệ thống bao gồm nhiều dịch vụ như quản lý sản phẩm, giỏ hàng, thanh toán, và giao hàng, mỗi dịch vụ có thể được triển khai trên các máy chủ khác nhau.​

- **Scalability**: Hệ thống có thể mở rộng bằng cách thêm máy chủ khi lưu lượng tăng.​

- **Fault Tolerance**: Nếu một máy chủ bị lỗi, các máy chủ khác vẫn tiếp tục hoạt động.​

- **Availability**: Hệ thống luôn sẵn sàng phục vụ người dùng 24/7.​

- **Transparency**: Người dùng không nhận thấy sự phân tán của hệ thống.​

- **Concurrency & Parallelism**: Xử lý nhiều yêu cầu mua hàng cùng lúc.​

- **Openness**: Hệ thống tích hợp với các dịch vụ bên thứ ba như cổng thanh toán.​

- **Vertical & Horizontal Scaling**: Nâng cấp phần cứng hoặc thêm máy chủ để đáp ứng nhu cầu.​

- **Load Balancer**: Phân phối yêu cầu người dùng đến các máy chủ khác nhau.​

- **Replication**: Dữ liệu người dùng được sao chép để đảm bảo an toàn và khả dụng.​

# 4. Kiến trúc của hệ thống phân tán
