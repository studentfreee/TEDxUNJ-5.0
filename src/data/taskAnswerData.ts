export type AnswerType = 'FACT' | 'MYTH';

export interface FactMythItem {
  id: number;
  question: string;
  answer: AnswerType;
  leadIn: string;
  explanation: string;
}

export const FACT_MYTH_ITEMS: FactMythItem[] = [
  {
    id: 1,
    question:
      'Dalam tradisi Palang Pintu Betawi, pihak mempelai pria harus bernyanyi sebelum diperbolehkan memasuki rumah mempelai wanita.',
    answer: 'MYTH',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Secara teknis, Palang Pintu adalah "ujian" bagi mempelai pria. Prosesi ini menggambarkan bahwa untuk meminang seorang gadis Betawi, seseorang harus melewati rintangan yang disimbolkan dengan "palang" atau pembatas. Hal ini mengajarkan filosofi bahwa kehidupan rumah tangga memerlukan perjuangan dan izin yang tidak mudah dari keluarga besar, sehingga setiap langkah harus ditempuh dengan prosedur adat yang benar. Palang pintu juga disertai dengan adu silat dan berbalas pantun jenaka.',
  },
  {
    id: 2,
    question:
      'Nasi kebuli dapat ditemukan sebagai bagian dari kuliner khas masyarakat Betawi di Jakarta',
    answer: 'FACT',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Nasi kebuli memiliki pengaruh kuat dari budaya Arab dan berkembang di lingkungan masyarakat keturunan Arab di Jakarta. Dalam perkembangannya, nasi kebuli kemudian menjadi salah satu bagian dari kekayaan kuliner yang dapat ditemukan dalam budaya Betawi. Nasi kebuli juga sering disajikan dalam berbagai acara, terutama dalam komunitas keturunan Arab, seperti perayaan keagamaan dan acara keluarga.',
  },
  {
    id: 3,
    question:
      'Gabus Pucung adalah makanan khas Betawi. Warna hitam pada kuah berasal dari kecap manis yang digunakan sebagai bumbu utama',
    answer: 'MYTH',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Gabus Pucung adalah salah satu makanan khas Betawi yang menggunakan ikan gabus sebagai bahan utamanya. Hidangan ini memiliki kuah berwarna hitam pekat dan menjadi bagian dari kekayaan kuliner tradisional masyarakat Betawi. Nama “Gabus Pucung” berasal dari dua unsur utama dalam hidangan ini, yaitu ikan gabus dan pucung atau kluwek. Nah, warna hitam khas pada kuahnya justru berasal dari kluwek, bukan dari kecap manis sebagai bahan utama pewarna kuah.',
  },
  {
    id: 4,
    question:
      'Bahasa Betawi hanya memiliki satu dialek yang digunakan secara sama oleh seluruh masyarakat Betawi',
    answer: 'MYTH',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Bahasa Betawi memiliki variasi/dialek, salah satunya yang umum dibedakan adalah Betawi Pusat dan Betawi Pinggiran (Ora). Perbedaan tersebut antara lain terlihat dari kosakata, pengucapan, dan pengaruh bahasa dari lingkungan masyarakat di wilayah masing-masing.',
  },
  {
    id: 5,
    question:
      'Soto Betawi sudah dikenal dengan nama ‘Soto Betawi’ sejak zaman Batavia pada abad ke-20',
    answer: 'FACT',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Nah, Abang, Mpok! Soto Betawi merupakan salah satu kuliner khas Jakarta yang terkenal dengan kuahnya yang gurih dan creamy dari perpaduan santan dan susu. Berisi potongan daging sapi dan jeroan, hidangan ini mulai dikenal pada awal abad ke-20 dan menjadi bagian dari kekayaan kuliner Betawi yang mendapat pengaruh cita rasa Arab dan India.',
  },
  {
    id: 6,
    question:
      'Ondel-ondel hanya digunakan sebagai hiburan dan tidak memiliki fungsi lain dalam budaya Betawi.',
    answer: 'MYTH',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Ondel-ondel memiliki fungsi yang lebih luas daripada sekadar hiburan. Dinas Kebudayaan DKI Jakarta mencatat beberapa fungsi ondel-ondel, yaitu sebagai pelengkap upacara adat, media promosi budaya, dekorasi, dan merupakan bagian dari berbagai acara seremonial serta pertunjukan. Oleh karena itu, pernyataan bahwa ondel-ondel hanya digunakan untuk hiburan tidak tepat.',
  },
  {
    id: 7,
    question:
      'Bir Pletok hanya dapat ditemukan dalam acara adat Betawi.',
    answer: 'MYTH',
    leadIn: 'Tahukah Abang Mpok?',
    explanation:
      'Bir Pletok tidak hanya terbatas pada acara adat belaka. Bir Pletok adalah minuman tradisional Betawi yang dapat dikonsumsi dalam berbagai situasi. Sumber Balai Pelestarian Nilai Budaya menyebutkan bahwa Bir Pletok juga dijual di toko ataupun warung serta seringkali dicari sebagai oleh-oleh khas Betawi',
  },
  {
    id: 8,
    question:
      'Tanjidor termasuk salah satu Warisan Budaya Takbenda DKI Jakarta.',
    answer: 'FACT',
    leadIn:
      'Nah, Abang, Mpok pernyataan kedelapan bahwa Tanjidor adalah Warisan Budaya Takbenda DKI Jakarta itu adalah fakta ya!',
    explanation:
      'Tanjidor adalah orkes rakyat Betawi yang lahir dari interaksi budaya lokal dan Eropa di Batavia abad ke-18. Bagi masyarakat saat ini, Tanjidor merupakan salah satu musik ikonik Jakarta. Hal ini dapat terlihat dalam pertunjukan di acara bertaraf internasional yang bertemakan tradisional.',
  },
  {
    id: 9,
    question: 'Kerak telor dibuat menggunakan beras ketan.',
    answer: 'FACT',
    leadIn:
      'Nah, Abang, Mpok pernyataan kesembilan bahwa kerak telor dibuat menggunakan beras ketan itu adalah fakta ya!',
    explanation:
      'Kerak telor adalah makanan khas Betawi yang dibuat menggunakan beras ketan putih, garam, merica bubuk, kelapa muda parut yang disangrai menjadi serundeng, telur ayam/telur bebek, ebi, bawang goreng serta bahan-bahan lainnya sesuai dengan kebutuhan.',
  },
  {
    id: 10,
    question:
      'Lenong Betawi hanya berisi cerita romantis tanpa pesan sosial.',
    answer: 'MYTH',
    leadIn: 'Tahukah, Abang, Mpok?',
    explanation:
      'Lenong merupakan bagian dari seni pertunjukan masyarakat Betawi. Cerita serta pertunjukannya berkaitan dengan kehidupan masyarakat serta dapat digunakan sebagai media penyampaian nilai dan pesan sosial. Status Lenong sebagai bagian dari warisan budaya Betawi juga tercatat dalam data resmi Pemprov DKI.',
  },
];
