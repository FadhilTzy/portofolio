# Dokumentasi Website Portofolio Kelompok FIS Team

File ini berisi tutorial penggunaan project, daftar contributor, dan contoh prompt yang dapat digunakan untuk membangun ulang website portofolio kelompok FIS Team.

## 1. Deskripsi Project

Website ini adalah portofolio kelompok FIS Team dari SMK Rajasa Surabaya. Website dibuat sebagai single page portfolio dengan gaya visual Neobrutalism, yaitu desain dengan warna kontras, border tebal, shadow tegas, tipografi besar, dan animasi modern.

Website menampilkan beberapa bagian utama:

- Navbar untuk navigasi ke setiap section.
- Home sebagai halaman pembuka.
- About untuk menjelaskan identitas tim.
- Team Members untuk menampilkan anggota kelompok.
- Projects untuk menampilkan karya atau project.
- Contact untuk informasi kontak dan form pesan.
- Footer untuk link cepat dan identitas website.

## 2. Teknologi yang Digunakan

Project ini menggunakan:

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- JavaScript
- HTML
- CSS
- GitHub Pages dengan package `gh-pages`

## 3. Struktur Folder Penting

```text
portofolio/
+-- public/
|   +-- members/          # Foto anggota kelompok
|   +-- projects/         # Gambar project
|   +-- favicon.svg
|   +-- icons.svg
+-- src/
|   +-- components/
|   |   +-- Navbar.jsx
|   |   +-- Home.jsx
|   |   +-- About.jsx
|   |   +-- TeamSection.jsx
|   |   +-- MemberCard.jsx
|   |   +-- Projects.jsx
|   |   +-- Contact.jsx
|   |   +-- Footer.jsx
|   +-- data/
|   |   +-- members.js
|   |   +-- projects.js
|   +-- App.jsx
|   +-- main.jsx
|   +-- index.css
+-- package.json
+-- vite.config.js
```

## 4. Tutorial Menjalankan Project

### A. Clone Repository

```bash
git clone https://github.com/FadhilTzy/portofolio.git
cd portofolio
```

### B. Install Dependency

```bash
npm install
```

### C. Jalankan Website di Localhost

```bash
npm run dev
```

Setelah perintah dijalankan, buka alamat yang muncul di terminal. Biasanya:

```text
http://localhost:5173
```

### D. Cek Kode dengan ESLint

```bash
npm run lint
```

### E. Build Project

```bash
npm run build
```

Hasil build akan dibuat di folder:

```text
dist/
```

### F. Preview Hasil Build

```bash
npm run preview
```

## 5. Cara Mengedit Website

### Mengedit Urutan Section

Urutan section website diatur di:

```text
src/App.jsx
```

Urutan saat ini:

```text
Navbar
Home
About
TeamSection
Projects
Contact
Footer
```

### Mengedit Teks Home

Buka file:

```text
src/components/Home.jsx
```

Di file ini, kamu bisa mengubah:

- Nama sekolah.
- Judul utama.
- Deskripsi pembuka.
- Tombol menuju team dan projects.

### Mengedit Tentang Tim

Buka file:

```text
src/components/About.jsx
```

Di file ini, kamu bisa mengubah:

- Deskripsi tim.
- Statistik.
- Lokasi.
- Email dan nomor telepon.

### Mengedit Data Anggota

Buka file:

```text
src/data/members.js
```

Format data anggota:

```js
{
  id: 1,
  name: 'Nama Anggota',
  role: 'TKJ',
  image: `${base}members/nama-foto.jpeg`,
  description: 'Deskripsi singkat anggota.',
  skills: ['React', 'Tailwind', 'Framer Motion'],
  social: {
    github: 'https://github.com/username',
    instagram: 'https://instagram.com/username',
    linkedin: '#',
  },
}
```

Jika ingin menambahkan foto anggota, simpan file gambar di:

```text
public/members/
```

Lalu sesuaikan nama file pada properti `image`.

### Mengedit Data Project

Buka file:

```text
src/data/projects.js
```

Format data project:

```js
{
  id: 1,
  title: 'Nama Project',
  image: `${base}projects/project1.png`,
  stack: ['React', 'Tailwind', 'Firebase'],
  description: 'Deskripsi singkat project.',
  github: 'https://github.com/username/repository',
  demo: '#',
}
```

Jika ingin menambahkan gambar project, simpan file gambar di:

```text
public/projects/
```

### Mengedit Kontak

Buka file:

```text
src/components/Contact.jsx
```

Di file ini, kamu bisa mengubah:

- Email.
- Nomor telepon.
- Lokasi.
- Teks pada form kontak.

### Mengedit Warna dan Style

Buka file:

```text
src/index.css
```

Warna utama pada website:

```text
#FFE135  kuning
#FF6B9D  pink
#4ECDC4  cyan
#0D0D0D  hitam
#F5F0E8  cream
```

Class penting yang digunakan:

```text
.neo-card
.neo-btn
.neo-input
.neo-tag
.display-font
.section-label
.stripe-bg
```

## 6. Cara Deploy ke GitHub Pages

Konfigurasi deploy ada di:

```text
vite.config.js
```

Bagian penting:

```js
base: '/portofolio/'
```

Jika nama repository berubah, bagian `base` juga harus disesuaikan.

Untuk deploy:

```bash
npm run deploy
```

Perintah tersebut akan menjalankan:

```bash
npm run build
gh-pages -d dist
```

## 7. Contributor

| Nama | Role | Kontribusi |
| --- | --- | --- |
| Muhammad Sulaiman | TKJ | Pengembangan UI retro modern, React, Tailwind, dan Framer Motion |
| Moch Fadhil | TKJ | Desain interface, branding, visual Neobrutalism, dan repository project |
| Muhammad Irfan | TKJ | Konsep backend, NodeJS, Express, dan MongoDB |

Repository project:

```text
https://github.com/FadhilTzy/portofolio
```

## 8. Prompt untuk Membangun Website Portofolio Kelompok

### Prompt Utama

```text
Buatkan saya website portofolio kelompok bernama FIS Team dari SMK Rajasa Surabaya menggunakan React dan Vite.

Website harus berbentuk single page portfolio dengan desain Neobrutalism yang modern, bold, responsif, dan memiliki animasi halus.

Section yang wajib dibuat:
1. Navbar fixed dengan menu About, Team, Projects, dan Contact.
2. Home section dengan judul besar "Project Portofolio Tim FIS", deskripsi singkat, tombol menuju Team, dan tombol menuju Projects.
3. About section yang menjelaskan bahwa kami adalah creative digital team dari SMK Rajasa Surabaya.
4. Team section yang menampilkan anggota kelompok dari file src/data/members.js.
5. Project section yang menampilkan project kelompok dari file src/data/projects.js.
6. Contact section dengan email, nomor telepon, lokasi, dan form nama/email/pesan.
7. Footer berisi brand FIS Team, quick links, services, dan social media icons.

Gunakan teknologi:
- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

Gunakan warna utama:
- #FFE135 untuk kuning
- #FF6B9D untuk pink
- #4ECDC4 untuk cyan
- #0D0D0D untuk hitam
- #F5F0E8 untuk background cream

Buat struktur folder yang rapi dengan folder components dan data. Pastikan website responsif untuk desktop dan mobile.
```

### Prompt untuk Membuat Komponen

```text
Buatkan komponen React untuk website portofolio kelompok dengan struktur:
- Navbar.jsx
- Home.jsx
- About.jsx
- TeamSection.jsx
- MemberCard.jsx
- Projects.jsx
- Contact.jsx
- Footer.jsx

Gunakan Framer Motion untuk animasi, React Icons untuk ikon, dan desain Neobrutalism dengan border hitam tebal, shadow besar, serta warna kuning, pink, cyan, hitam, dan cream.
```

### Prompt untuk Membuat Data Anggota

```text
Buatkan file src/data/members.js untuk website portofolio kelompok React. Data harus berupa array bernama members. Setiap anggota memiliki id, name, role, image, description, skills, dan social yang berisi github, instagram, dan linkedin.
```

### Prompt untuk Membuat Data Project

```text
Buatkan file src/data/projects.js untuk website portofolio kelompok React. Data harus berupa array bernama projects. Setiap project memiliki id, title, image, stack, description, github, dan demo.
```

### Prompt untuk Memperbaiki Tampilan Mobile

```text
Periksa dan rapikan tampilan mobile website portofolio React saya. Fokus pada navbar hamburger, ukuran teks hero, grid team members, grid projects, spacing antar section, tombol, dan form contact agar nyaman digunakan di layar kecil.
```

### Prompt untuk Membuat Dokumentasi

```text
Bacalah seluruh codingan website portofolio kelompok saya, lalu buatkan file Markdown yang berisi tutorial menjalankan project, cara mengedit konten, cara build dan deploy, daftar contributor, serta prompt yang dapat digunakan untuk membangun website portofolio kelompok dari awal.
```

## 9. Catatan Penting

- Jangan lupa menjalankan `npm install` sebelum menjalankan project.
- Gunakan `npm run dev` untuk membuka website di localhost.
- Data anggota ada di `src/data/members.js`.
- Data project ada di `src/data/projects.js`.
- Foto anggota disimpan di `public/members/`.
- Gambar project disimpan di `public/projects/`.
- Jika website dideploy ke GitHub Pages dan asset tidak muncul, cek `base` di `vite.config.js`.
