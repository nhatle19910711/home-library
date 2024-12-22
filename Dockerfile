# Sử dụng hình ảnh Node.js
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package.json ./
COPY yarn.lock ./

# Cài đặt các phụ thuộc
RUN npm -v
RUN npm install -g yarn --force
RUN yarn -v
RUN yarn install

# Sao chép mã nguồn
COPY . .

# Biên dịch mã TypeScript (nếu cần)
RUN npm run build

# Chạy ứng dụng
CMD ["npm", "run", "start:prod"]

# Expose cổng 4000
EXPOSE 4000
