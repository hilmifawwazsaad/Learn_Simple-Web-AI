# Simple website to chat with AI model

**[EN]** This code was created to learn how to integrate AI models into websites. If you are interested, you can use this UI template for your learning needs.

**[ID]** Code ini dibuat untuk mempelajari cara mengintegrasikan model AI ke dalam situs web. Jika Anda tertarik, Anda dapat menggunakan templat UI ini untuk kebutuhan pembelajaran Anda.

## Table of Contents
[A. English Version](#english-version)      

[B. Versi Bahasa Indonesia](#versi-bahasa-indonesia)

# English Version

## Tech Stack

1. Next.js
2. Tailwind CSS
3. Ollama
4. Gemini-2.0-flash-exp API (free)
5. Deepseek-r1:1.5b API from Ollama (free)

## Features

1. Responsive
2. AI model switch button (if using more than one AI model)
3. Theme switch button (dark and light)

## Guidelines

Here is my simple guide to learning AI.

#### 1. User Interface

1. Clone/download this github repository
2. Open it in a text editor application
3. Install the dependencies with `npm install`
4. Run `npm run dev` to start the development server next.js

> Notes: This only shows the UI, functionality is still not possible. If you want it to work, you can go to the AI Model setup section

#### 2. Gemini API

1. Visit the website [ai.google.dev](https://ai.google.dev/)
2. Press the “Explore models in Google AI Studio” button. You should be directed to the following page [here](https://aistudio.google.com/prompts/new_chat)
3. On the page, the right bar, there are “Models” provided, you can select them (details are all available). However, here we are using the free one for the token cost which is `gemini-2.0-flash-exp`.
4. If so, please press the “Get Code” button above the model. Because I used Next.JS, I chose `Javascript`.

> You can choose according to the tech stack you use

5. Next is to get the “API Key”. You can visit the following page [here](https://aistudio.google.com/apikey)
6. Press the “Create API key” button
7. Follow the process until it's finished
8. If so, please return to your text editor. Create a file in the root with the name `.env`
9. Inside `.env`, add the following code and paste “API Key” in the `thisIsYourKey` section:

```javascript
NEXT_PUBLIC_GEMINI_API_KEY=thisIsYourKey
```

10. If so, install the dependencies in the terminal with the following command

```bash
npm install @google/generative-ai
```

11. If successful, restart your Next.js server with `npm run dev`

> Notes: If you are using a different AI model, please change the model in the `model-1.js` file in src/app/utils/model-1.js

#### 3. Ollama FAST API

1. Visit the [Ollama Website](https://ollama.com/)
2. Then press the “Download” button
3. Select the operating system you are using (here I am using Windows) and download it.
4. When finished, please install Ollama that has been downloaded
5. When finished, open the notification that appears. Later you will be directed to a terminal that has been set up with ollama.
6. You can try to run the `ollama` command

> Notes: You can't run anything here yet because you haven't downloaded the AI model. To see the models you have, you can run the `ollama list` command.

7. Set up your System Environment (System variables). Add to the path section that leads to the folder with the Ollama .exe content. Mine has a path like this:

```bash
C:\Users\LENOVO\AppData\Local\Programs\Ollama
```

8. If so, please return to the ollama website and go to the [models section](https://ollama.com/search)
9. Select the model you want to use. There is a complete range of models and sizes
10. Since I am using `deepseek-r1:1.5b`, please select that model
11. Run this command in the terminal that was opened earlier:

```bash
ollama run deepseek-r1:1.5b
```

12. When completed, the AI model installation is successful. You can communicate with the AI on your local terminal. 

> Here, your website functionality should be able to run because you already have an AI model.

13. Everything related to Ollama in my program, you can go to the file `src/app/utils/model-2.js`

> The AI model of Ollama generally runs on `http://localhost:11434`. However, since we are using the FAST API that already exists in the Ollama documentation, it uses `http://localhost:11434/api/chat`.

14. Almost forgot, don't forget to install Ollama on your Next.js server with the command :

```bash
npm install ollama
```

## Closing

I am not an expert, but I am a person who is thirsty for knowledge and wants to continue learning. If there are still shortcomings in delivery and programming, I apologize. I hope you can give me feedback and comments.

Thank you 😁

# Versi Bahasa Indonesia

## Teknologi

1. Next.js
2. Tailwind CSS
3. Ollama
4. API Gemini-2.0-flash-exp (gratis)
5. API Deepseek-r1: 1.5b dari Ollama (gratis)

## Fitur

1. Responsif
2. Tombol sakelar model AI (jika menggunakan lebih dari satu model AI)
3. Tombol pengalih tema (gelap dan terang)

## Panduan

Berikut ini adalah panduan sederhana untuk mempelajari AI.

#### 1. Antarmuka Pengguna

1. Salin/unduh repositori github ini
2. Buka di aplikasi editor teks
3. Instal dependensi dengan `npm install`
4. Jalankan `npm run dev` untuk memulai server pengembangan next.js

> Catatan: Ini hanya menunjukkan UI, fungsionalitas masih belum memungkinkan. Jika Anda ingin berfungsi, Anda dapat pergi ke bagian pengaturan Model AI

#### 2. API Gemini

1. Kunjungi situs web [ai.google.dev](https://ai.google.dev/)
2. Tekan tombol “Jelajahi model di Google AI Studio”. Anda akan diarahkan ke halaman berikut [di sini](https://aistudio.google.com/prompts/new_chat)
3. Di halaman tersebut, di bilah kanan, ada “Model” yang disediakan, Anda dapat memilihnya (detailnya tersedia). Namun, di sini kami menggunakan yang gratis untuk biaya token yaitu `gemini-2.0-flash-exp`.
4. Jika sudah, silakan tekan tombol “Get Code” di atas model. Karena saya menggunakan Next.JS, saya memilih `Javascript`.

> Anda dapat memilih sesuai dengan tumpukan teknologi yang Anda gunakan

5. Selanjutnya adalah mendapatkan “API Key”. Anda dapat mengunjungi halaman berikut [di sini](https://aistudio.google.com/apikey)
6. Tekan tombol “Buat API key”
7. Ikuti prosesnya hingga selesai
8. Jika sudah, kembalilah ke editor teks Anda. Buat sebuah file di root dengan nama `.env`
9. Di dalam `.env`, tambahkan kode berikut dan tempelkan “API Key” pada bagian `thisIsYourKey`:

```javascript
NEXT_PUBLIC_GEMINI_API_KEY=thisIsYourKey
```

10. Jika sudah, instal dependensi pada terminal dengan perintah berikut

```bash
npm install @google/generative-ai
```

11. Jika berhasil, mulai ulang server Next.js Anda dengan perintah `npm run dev`

> Catatan: Jika Anda menggunakan model AI yang berbeda, ubahlah model dalam berkas `model-1.js` di src/app/utils/model-1.js

#### 3. Ollama FAST API

1. Kunjungi [Situs Web Ollama](https://ollama.com/)
2. Kemudian tekan tombol “Unduh”
3. Pilih sistem operasi yang Anda gunakan (di sini saya menggunakan Windows) dan unduh.
4. Setelah selesai, silakan instal Ollama yang telah diunduh
5. Setelah selesai, buka notifikasi yang muncul. Nantinya Anda akan diarahkan ke terminal yang sudah di-setting dengan ollama.
6. Anda dapat mencoba menjalankan perintah `ollama`

> Catatan: Anda belum dapat menjalankan apa pun di sini karena Anda belum mengunduh model AI. Untuk melihat model yang Anda miliki, Anda dapat menjalankan perintah `ollama list`.

7. Atur Lingkungan Sistem Anda (Variabel sistem). Tambahkan pada bagian jalur yang mengarah ke folder dengan konten Ollama .exe. Milik saya memiliki jalur seperti ini:

```bash
C:\Users\LENOVO\AppData\Local\Programs\Ollama
```

8. Jika sudah silakan kembali ke situs web ollama dan buka [bagian model](https://ollama.com/search)
9. Pilih model yang ingin Anda gunakan. Tersedia berbagai macam model dan ukuran yang lengkap
10. Karena saya menggunakan `deepseek-r1:1.5b`, silakan pilih model tersebut
11. Jalankan perintah ini pada terminal yang telah dibuka sebelumnya:

```bash
ollama jalankan deepseek-r1:1.5b
```

12. Setelah selesai, instalasi model AI berhasil. Anda dapat berkomunikasi dengan AI pada terminal lokal Anda

> Di sini, fungsionalitas situs web Anda seharusnya dapat berjalan karena Anda sudah memiliki model AI.

13. Segala sesuatu yang berhubungan dengan Ollama dalam program saya, Anda dapat membuka file `src/app/utils/model-2.js`

> Model AI Ollama pada umumnya berjalan di `http://localhost:11434`. Namun, karena kita menggunakan FAST API yang sudah ada di dokumentasi Ollama, maka kita menggunakan `http://localhost:11434/api/chat`.

14. Hampir lupa, jangan lupa untuk menginstall Ollama pada server Next.js anda dengan perintah :

```bash
npm install ollama
```

## Penutup

Saya bukanlah seorang ahli, tetapi saya adalah orang yang haus akan pengetahuan dan ingin terus belajar. Jika masih ada kekurangan dalam penyampaian dan pemrograman, saya mohon maaf. Saya harap Anda dapat memberikan masukan dan komentar kepada saya.

Terima kasih 😁