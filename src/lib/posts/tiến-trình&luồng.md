---
title: "Tiến trình & luồng"
date: "2025-05-05"
updated: "2025-05-05"
categories:
  - "sveltekit"
  - "markdown"
coverImage: "/images/1.jpg"
coverWidth: 16
coverHeight: 9
excerpt: Check out how heading links work with this starter in this post.
---
# 1. Phân tích hiệu năng của máy laptop
## 1. CPU (Bộ vi xử lý)

- Intel Core i5-12450HX (12th Gen, Alder Lake)

- 8 cores (lõi vật lý)
→ 4 lõi Performance + 4 lõi Efficient (cấu trúc big.LITTLE của Intel)

- 12 threads (luồng xử lý)
→ Do công nghệ Hyper-Threading: 1 lõi có thể chạy 2 luồng

- Base speed: 2.40 GHz

- Tốc độ hiện tại: 1.57 GHz (khi đang idle)

- Utilization: 6% → CPU nhàn rỗi, không bị nghẽn

- Cache (bộ nhớ đệm):
→ L1: 704 KB
→ L2: 7 MB
→ L3: 12 MB
Bộ nhớ cache giúp lưu trữ tạm các dữ liệu/phép toán thường dùng → tăng tốc độ xử lý

-  Ý nghĩa hiệu năng:

CPU mạnh, thích hợp lập trình, AI/ML vừa phải, chơi game, chạy máy ảo, build code nhanh

Có 12 threads, giúp chạy đa luồng tốt (ví dụ: chạy server, build code, xử lý dữ liệu song song)

## 2. GPU (Card đồ họa)

- GPU 0: NVIDIA GeForce RTX 2050

- GPU 1: Intel UHD Graphics

- Ý nghĩa hiệu năng:

RTX GPU (RTX 3050 trở lên) hỗ trợ tốt AI/ML, đồ họa, game

Dùng GPU khi chạy các task như training AI model, render video, chơi game nặng

Intel UHD chỉ dùng cho tác vụ nhẹ (YouTube, PowerPoint, lướt web)

## 3. RAM (Bộ nhớ)

- Tổng RAM: 15.7 GB

- Đang dùng: 10.9 GB (69%)

- Ý nghĩa hiệu năng:

RAM lớn → chạy tốt các task nhiều dữ liệu, nhiều tab, nhiều app mà không lag

Tuy nhiên, nếu vượt 80–90% RAM sẽ bắt đầu swap sang ổ cứng (virtual memory), làm chậm hệ thống
# 2. Nghiên cứu các bài toán phổ biến trong ngành CNTT sử dụng đa luồng, đa tiến trình
| **STT** | **Bài toán**              | **Dùng đa luồng (Thread)** | **Dùng đa tiến trình (Process)** |
| ------- | ------------------------- | -------------------------- | -------------------------------- |
| 1       | Web server                |  Xử lý nhiều request     |  Process pool tránh crash      |
| 2       | Chat application          |  Nhiều user nhắn tin     |  Backend service tách biệt     |
| 3       | Image processing          |  Filter nhiều ảnh        |  Chia nhóm ảnh tách biệt       |
| 4       | Video rendering           |  Encode frame song song  |  Tách scene thành process      |
| 5       | Game engine               |  AI, input, render       | x                                |
| 6       | Machine Learning training |  Load data song song     |  Distributed training          |
| 7       | Compiler/build system     |  Build nhiều file        |  Tách task build               |
| 8       | Database server           |  Query song song         |  Process pool                  |
| 9       | File compression          |  Nén nhiều file          | x                                |
| 10      | Web crawler               |  Crawl nhiều URL         |  Process tránh block           |
| 11      | Antivirus scanning        |  Scan file song song     |  Process isolate vùng          |
| 12      | Blockchain node           |  Validate block          |  Node process riêng            |

# 3. Bài toán ứng dụng Thread, Process
![Markdown](static/images/bai3.jpg)


# 4. ChatGPT và hệ thống phân tán khi huấn luyện


### Mô hình ChatGPT sử dụng hệ thống phân tán:
- **Data Parallelism:** chia batch dữ liệu cho nhiều GPU cùng xử lý
- **Model Parallelism:** chia tầng của mạng neural ra nhiều GPU
- **Pipeline Parallelism:** phân tầng thành các giai đoạn để xử lý nối tiếp

### Công nghệ sử dụng:
- GPU cluster tốc độ cao (NVIDIA A100, TPU)
- Kết nối InfiniBand
- Framework: PyTorch Distributed, DeepSpeed, Megatron-LM

### Tài liệu tham khảo:
- [EleutherAI GPT-3 Training Blog](https://blog.eleuther.ai/gpt3-model-training/)
- [NVIDIA - Scaling Deep Learning](https://developer.nvidia.com/blog/large-language-model-training-gpu-clusters/)
- [Microsoft DeepSpeed](https://www.microsoft.com/en-us/research/project/deepspeed/)