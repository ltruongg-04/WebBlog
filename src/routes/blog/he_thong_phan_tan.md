---
title: "Hệ thống phân tán là gì?"
date: "2025-04-28"
author: "[Nguyễn Lê Trường]"
---

![Distributed Systems](https://upload.wikimedia.org/wikipedia/commons/5/51/Client-server-model.svg)

# Hệ thống phân tán là gì?

Hệ thống phân tán (Distributed System) là tập hợp nhiều máy tính độc lập, phối hợp với nhau để đạt được mục tiêu chung.

# Các ứng dụng của hệ thống phân tán

- Dịch vụ web như Google, Facebook.
- Lưu trữ đám mây như Dropbox, Google Drive.
- Hệ thống ngân hàng.
- Các hệ thống IoT.

# Các khái niệm chính của hệ thống phân tán

## Scalability
Khả năng mở rộng hệ thống khi số lượng người dùng tăng.

## Fault Tolerance
Hệ thống vẫn hoạt động ngay cả khi một số phần tử bị lỗi.

## Availability
Tính sẵn sàng, luôn đảm bảo phục vụ khi người dùng yêu cầu.

## Transparency
Ẩn đi sự phức tạp của hệ thống với người dùng.

## Concurrency
Nhiều tiến trình hoạt động đồng thời.

## Parallelism
Chạy nhiều nhiệm vụ cùng lúc để tăng tốc độ xử lý.

## Openness
Hệ thống mở, dễ dàng tích hợp nhiều công nghệ khác nhau.

## Vertical Scaling
Nâng cấp phần cứng của một server (CPU mạnh hơn, RAM nhiều hơn).

## Horizontal Scaling
Thêm nhiều server vào hệ thống.

## Load Balancer
Phân phối đều lưu lượng truy cập vào nhiều server.

## Replication
Nhân bản dữ liệu hoặc dịch vụ để đảm bảo tính sẵn sàng và độ tin cậy.

# Ví dụ thực tế

**Ví dụ: Hệ thống Netflix**

- Netflix dùng **Replication** để sao lưu video trên nhiều server.
- Dùng **Load Balancer** để chia lượng truy cập cho nhiều server khác nhau.
- **Horizontal Scaling** được áp dụng khi nhu cầu người xem tăng mạnh.

→ Các thuật ngữ này giúp Netflix luôn ổn định và mượt mà cho hàng triệu người xem cùng lúc.

# Kiến trúc của hệ thống phân tán

Các mô hình phổ biến:

- **Client-Server Architecture**: Một server chính phục vụ nhiều client.
- **Peer-to-Peer Architecture**: Các máy ngang hàng, tự kết nối và chia sẻ tài nguyên.
- **Microservices Architecture**: Các dịch vụ nhỏ, độc lập, liên kết với nhau.

# Ví dụ kiến trúc

**Ví dụ: Uber**

- Các microservices riêng biệt xử lý đặt xe, thanh toán, điều hướng, quản lý tài xế.
- Các dịch vụ này giao tiếp với nhau thông qua API Gateway.

---

*Tham khảo:*  
- [Wikipedia - Distributed Systems](https://en.wikipedia.org/wiki/Distributed_computing)  
- Các slide bài giảng môn Hệ thống phân tán.
