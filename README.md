/**
 * LiMeiHua Taproot Airdrop in WorldApp - README (28 Languages)
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

# LiMeiHua Taproot Airdrop in WorldApp

A comprehensive **World ID-verified Airdrop Distribution System** for Taproot Assets tokens integrated with WorldApp ecosystem. Prevent bot attacks and ensure fair distribution through cryptographic identity verification.

## 🌍 Available Languages

- [English](#english)
- [ไทย](#thai)
- [中文](#chinese)
- [日本語](#japanese)
- [한국어](#korean)
- [Español](#spanish)
- [Français](#french)
- [Deutsch](#german)
- [Português](#portuguese)
- [Русский](#russian)
- [العربية](#arabic)
- [हिन्दी](#hindi)
- [Tiếng Việt](#vietnamese)
- [Bahasa Indonesia](#indonesian)
- [Bahasa Melayu](#malay)
- [Türkçe](#turkish)
- [Italiano](#italian)
- [Nederlands](#dutch)
- [Polski](#polish)
- [Svenska](#swedish)
- [Українська](#ukrainian)
- [Čeština](#czech)
- [Română](#romanian)
- [Ελληνικά](#greek)
- [עברית](#hebrew)
- [বাংলা](#bengali)
- [Filipino](#filipino)
- [Kiswahili](#swahili)

---

## English

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

A cutting-edge airdrop distribution platform that leverages **World ID verification** to prevent Sybil attacks and ensure fair token distribution. Perfect for projects launching Taproot Assets tokens on Bitcoin Lightning Network.

**Key Features:**
- ✅ World ID Verification for Sybil protection
- ✅ Batch recipient upload (CSV support)
- ✅ Admin campaign management dashboard
- ✅ User-friendly claim interface
- ✅ Real-time eligibility checking
- ✅ Transaction history tracking
- ✅ Cyberpunk UI theme
- ✅ WorldApp ecosystem integration

### 🎯 How It Works

1. **Admin Creates Campaign** - Set up airdrop with token details
2. **Upload Recipients** - Batch upload eligible addresses
3. **Users Verify with World ID** - Prove personhood
4. **Check Eligibility** - System verifies user is in recipient list
5. **Claim Airdrop** - Receive tokens to Lightning wallet
6. **Track History** - View all claims and transactions

### 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/world-id/verify` | Verify World ID token |
| GET | `/api/world-id/status/:userId` | Check verification status |
| POST | `/api/campaigns/create` | Create airdrop campaign |
| GET | `/api/campaigns` | List all campaigns |
| GET | `/api/campaigns/:campaignId` | Get campaign details |
| POST | `/api/campaigns/:campaignId/batch-upload` | Upload batch recipients |
| POST | `/api/airdrop/check-eligibility` | Check user eligibility |
| POST | `/api/airdrop/claim` | Claim airdrop tokens |
| GET | `/api/airdrop/history/:userId` | Get claim history |
| GET | `/api/campaigns/:campaignId/stats` | Get campaign statistics |

### 🔒 Security Features

- **World ID Verification**: Cryptographic proof of personhood
- **Sybil Protection**: One person = one claim
- **Batch Processing**: Efficient large-scale distribution
- **Immutable Records**: All claims permanently recorded
- **Rate Limiting**: Prevent abuse
- **Input Validation**: Comprehensive data validation

### 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Airdrop-in-WorldApp.git
cd limeihua-taproot-airdrop-worldapp

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your configuration

# Development
npm run dev

# Production build
npm run build
npm start
```

### 📦 Project Structure

```
limeihua-taproot-airdrop-worldapp/
├── backend/
│   ├── server.js              # Express server
│   └── routes/                # API endpoints
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Main component
│   │   ├── App.css            # Cyberpunk styling
│   │   └── components/        # React components
│   └── public/                # Static assets
├── .env.example               # Environment template
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## ไทย

### 🚀 ระบบแจกจ่าย Airdrop ของ LiMeiHua ใน WorldApp

แพลตฟอร์มแจกจ่าย Airdrop ที่ใช้ **World ID verification** เพื่อป้องกัน Sybil attacks และรับประกันการแจกจ่ายโทเค็นที่ยุติธรรม เหมาะสำหรับโปรเจกต์ที่เปิดตัว Taproot Assets tokens บน Bitcoin Lightning Network

**ฟีเจอร์หลัก:**
- ✅ ยืนยันตัวตนด้วย World ID เพื่อป้องกัน Sybil
- ✅ อัปโหลดผู้รับเป็น batch (รองรับ CSV)
- ✅ แดชบอร์ดจัดการแคมเปญสำหรับ Admin
- ✅ อินเตอร์เฟซที่ใช้งานง่ายสำหรับผู้ใช้
- ✅ ตรวจสอบความมีสิทธิ์แบบเรียลไทม์
- ✅ ติดตามประวัติธุรกรรม
- ✅ ธีม Cyberpunk UI
- ✅ การรวมเข้ากับระบบนิเวศ WorldApp

---

## 中文

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

一个尖端的空投分发平台，利用 **World ID 验证** 来防止女巫攻击并确保公平的代币分发。非常适合在比特币闪电网络上推出 Taproot Assets 代币的项目。

**主要功能：**
- ✅ World ID 验证以防止女巫攻击
- ✅ 批量收件人上传（支持 CSV）
- ✅ 管理员活动管理仪表板
- ✅ 用户友好的领取界面
- ✅ 实时资格检查
- ✅ 交易历史跟踪
- ✅ 赛博朋克 UI 主题
- ✅ WorldApp 生态系统集成

---

## 日本語

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

**World ID 検証** を活用してシビル攻撃を防ぎ、公平なトークン分配を保証する最先端のエアドロップ分配プラットフォーム。ビットコイン ライトニング ネットワークで Taproot Assets トークンを立ち上げるプロジェクトに最適です。

**主な機能：**
- ✅ シビル保護のための World ID 検証
- ✅ バッチ受信者アップロード（CSV サポート）
- ✅ 管理者キャンペーン管理ダッシュボード
- ✅ ユーザーフレンドリーなクレーム インターフェース
- ✅ リアルタイム適格性チェック
- ✅ トランザクション履歴追跡
- ✅ サイバーパンク UI テーマ
- ✅ WorldApp エコシステム統合

---

## 한국어

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

**World ID 검증** 을 활용하여 Sybil 공격을 방지하고 공정한 토큰 분배를 보장하는 최첨단 에어드롭 분배 플랫폼입니다. 비트코인 라이트닝 네트워크에서 Taproot Assets 토큰을 출시하는 프로젝트에 완벽합니다.

**주요 기능:**
- ✅ Sybil 보호를 위한 World ID 검증
- ✅ 배치 수신자 업로드(CSV 지원)
- ✅ 관리자 캠페인 관리 대시보드
- ✅ 사용자 친화적인 클레임 인터페이스
- ✅ 실시간 적격성 확인
- ✅ 거래 내역 추적
- ✅ 사이버펑크 UI 테마
- ✅ WorldApp 생태계 통합

---

## Español

### 🚀 LiMeiHua Taproot Airdrop en WorldApp

Una plataforma de distribución de airdrops de vanguardia que aprovecha la **verificación de World ID** para prevenir ataques Sybil y garantizar una distribución justa de tokens. Perfecto para proyectos que lanzan tokens Taproot Assets en Bitcoin Lightning Network.

**Características principales:**
- ✅ Verificación de World ID para protección Sybil
- ✅ Carga de destinatarios por lotes (soporte CSV)
- ✅ Panel de gestión de campañas para administradores
- ✅ Interfaz fácil de usar para reclamaciones
- ✅ Verificación de elegibilidad en tiempo real
- ✅ Seguimiento del historial de transacciones
- ✅ Tema de interfaz de usuario ciberpunk
- ✅ Integración del ecosistema WorldApp

---

## Français

### 🚀 LiMeiHua Taproot Airdrop dans WorldApp

Une plateforme de distribution d'airdrops de pointe qui exploite la **vérification World ID** pour prévenir les attaques Sybil et garantir une distribution équitable des jetons. Parfait pour les projets lançant des jetons Taproot Assets sur Bitcoin Lightning Network.

**Caractéristiques principales:**
- ✅ Vérification World ID pour la protection Sybil
- ✅ Téléchargement par lot de destinataires (support CSV)
- ✅ Tableau de bord de gestion de campagne pour les administrateurs
- ✅ Interface conviviale pour les réclamations
- ✅ Vérification d'éligibilité en temps réel
- ✅ Suivi de l'historique des transactions
- ✅ Thème d'interface utilisateur cyberpunk
- ✅ Intégration de l'écosystème WorldApp

---

## Deutsch

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

Eine hochmoderne Airdrop-Verteilungsplattform, die die **World ID-Verifizierung** nutzt, um Sybil-Angriffe zu verhindern und eine faire Token-Verteilung zu gewährleisten. Perfekt für Projekte, die Taproot Assets-Token im Bitcoin Lightning Network starten.

**Hauptmerkmale:**
- ✅ World ID-Verifizierung zum Schutz vor Sybil-Angriffen
- ✅ Batch-Upload von Empfängern (CSV-Unterstützung)
- ✅ Admin-Kampagnenverwaltungs-Dashboard
- ✅ Benutzerfreundliche Anspruchsschnittstelle
- ✅ Echtzeit-Eignungsprüfung
- ✅ Transaktionsverlauf-Tracking
- ✅ Cyberpunk-UI-Design
- ✅ WorldApp-Ökosystem-Integration

---

## Português

### 🚀 LiMeiHua Taproot Airdrop no WorldApp

Uma plataforma de distribuição de airdrops de ponta que aproveita a **verificação World ID** para prevenir ataques Sybil e garantir uma distribuição justa de tokens. Perfeito para projetos que lançam tokens Taproot Assets na Bitcoin Lightning Network.

**Características principais:**
- ✅ Verificação World ID para proteção Sybil
- ✅ Upload em lote de destinatários (suporte CSV)
- ✅ Painel de gerenciamento de campanhas para administradores
- ✅ Interface amigável para reivindicações
- ✅ Verificação de elegibilidade em tempo real
- ✅ Rastreamento do histórico de transações
- ✅ Tema de interface do usuário cyberpunk
- ✅ Integração do ecossistema WorldApp

---

## Русский

### 🚀 LiMeiHua Taproot Airdrop в WorldApp

Авангардная платформа распределения эирдропов, которая использует **проверку World ID** для предотвращения атак Sybil и обеспечения справедливого распределения токенов. Идеально подходит для проектов, запускающих токены Taproot Assets в сети Bitcoin Lightning Network.

**Основные функции:**
- ✅ Проверка World ID для защиты от Sybil
- ✅ Загрузка получателей пакетом (поддержка CSV)
- ✅ Панель управления кампаниями для администраторов
- ✅ Удобный интерфейс для претензий
- ✅ Проверка приемлемости в реальном времени
- ✅ Отслеживание истории транзакций
- ✅ Киберпанк-тема пользовательского интерфейса
- ✅ Интеграция экосистемы WorldApp

---

## العربية

### 🚀 LiMeiHua Taproot Airdrop في WorldApp

منصة توزيع الهواء المتقدمة التي تستفيد من **التحقق من World ID** لمنع هجمات Sybil وضمان توزيع عادل للرموز. مثالية للمشاريع التي تطلق رموز Taproot Assets على شبكة Bitcoin Lightning Network.

**الميزات الرئيسية:**
- ✅ التحقق من World ID لحماية Sybil
- ✅ تحميل المستقبلين على دفعات (دعم CSV)
- ✅ لوحة تحكم إدارة الحملات للمسؤولين
- ✅ واجهة سهلة الاستخدام للمطالبات
- ✅ التحقق من الأهلية في الوقت الفعلي
- ✅ تتبع سجل المعاملات
- ✅ موضوع واجهة المستخدم السايبربانك
- ✅ تكامل نظام WorldApp البيئي

---

## हिन्दी

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

एक अत्याधुनिक एयरड्रॉप वितरण प्लेटफॉर्म जो **World ID सत्यापन** का लाभ उठाता है ताकि Sybil हमलों को रोका जा सके और टोकन का निष्पक्ष वितरण सुनिश्चित किया जा सके। Bitcoin Lightning Network पर Taproot Assets टोकन लॉन्च करने वाली परियोजनाओं के लिए बिल्कुल सही।

**मुख्य विशेषताएं:**
- ✅ Sybil सुरक्षा के लिए World ID सत्यापन
- ✅ बैच प्राप्तकर्ता अपलोड (CSV समर्थन)
- ✅ प्रशासकों के लिए अभियान प्रबंधन डैशबोर्ड
- ✅ दावों के लिए उपयोगकर्ता के अनुकूल इंटरफेस
- ✅ रीयल-टाइम पात्रता जांच
- ✅ लेनदेन इतिहास ट्रैकिंग
- ✅ साइबरपंक UI थीम
- ✅ WorldApp इकोसिस्टम एकीकरण

---

## Tiếng Việt

### 🚀 LiMeiHua Taproot Airdrop trong WorldApp

Một nền tảng phân phối airdrop tiên tiến tận dụng **xác minh World ID** để ngăn chặn các cuộc tấn công Sybil và đảm bảo phân phối token công bằng. Hoàn hảo cho các dự án ra mắt token Taproot Assets trên Bitcoin Lightning Network.

**Các tính năng chính:**
- ✅ Xác minh World ID để bảo vệ Sybil
- ✅ Tải lên người nhận theo lô (hỗ trợ CSV)
- ✅ Bảng điều khiển quản lý chiến dịch cho quản trị viên
- ✅ Giao diện thân thiện với người dùng để yêu cầu
- ✅ Kiểm tra tính đủ điều kiện theo thời gian thực
- ✅ Theo dõi lịch sử giao dịch
- ✅ Chủ đề giao diện người dùng cyberpunk
- ✅ Tích hợp hệ sinh thái WorldApp

---

## Bahasa Indonesia

### 🚀 LiMeiHua Taproot Airdrop di WorldApp

Platform distribusi airdrop canggih yang memanfaatkan **verifikasi World ID** untuk mencegah serangan Sybil dan memastikan distribusi token yang adil. Sempurna untuk proyek yang meluncurkan token Taproot Assets di Bitcoin Lightning Network.

**Fitur Utama:**
- ✅ Verifikasi World ID untuk perlindungan Sybil
- ✅ Unggah penerima batch (dukungan CSV)
- ✅ Dasbor manajemen kampanye untuk admin
- ✅ Antarmuka ramah pengguna untuk klaim
- ✅ Pemeriksaan kelayakan waktu nyata
- ✅ Pelacakan riwayat transaksi
- ✅ Tema UI cyberpunk
- ✅ Integrasi ekosistem WorldApp

---

## Bahasa Melayu

### 🚀 LiMeiHua Taproot Airdrop dalam WorldApp

Platform pengedaran airdrop canggih yang memanfaatkan **pengesahan World ID** untuk mencegah serangan Sybil dan memastikan pengedaran token yang adil. Sempurna untuk projek yang melancarkan token Taproot Assets di Bitcoin Lightning Network.

**Ciri-ciri Utama:**
- ✅ Pengesahan World ID untuk perlindungan Sybil
- ✅ Muat naik penerima batch (sokongan CSV)
- ✅ Papan pemuka pengurusan kempen untuk pentadbir
- ✅ Antarmuka mesra pengguna untuk tuntutan
- ✅ Pemeriksaan kelayakan masa nyata
- ✅ Penjejakan riwayat transaksi
- ✅ Tema UI cyberpunk
- ✅ Integrasi ekosistem WorldApp

---

## Türkçe

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

**World ID doğrulaması** yararlanarak Sybil saldırılarını önleyen ve adil token dağıtımını sağlayan son teknoloji bir airdrop dağıtım platformu. Bitcoin Lightning Network'te Taproot Assets tokenları başlatan projeler için mükemmeldir.

**Ana Özellikler:**
- ✅ Sybil koruması için World ID doğrulaması
- ✅ Toplu alıcı yüklemesi (CSV desteği)
- ✅ Yöneticiler için kampanya yönetimi panosu
- ✅ Talepler için kullanıcı dostu arayüz
- ✅ Gerçek zamanlı uygunluk kontrolü
- ✅ İşlem geçmişi takibi
- ✅ Cyberpunk UI teması
- ✅ WorldApp ekosistem entegrasyonu

---

## Italiano

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

Una piattaforma di distribuzione di airdrop all'avanguardia che sfrutta la **verifica World ID** per prevenire gli attacchi Sybil e garantire una distribuzione equa dei token. Perfetto per i progetti che lanciano token Taproot Assets su Bitcoin Lightning Network.

**Caratteristiche Principali:**
- ✅ Verifica World ID per la protezione Sybil
- ✅ Caricamento batch dei destinatari (supporto CSV)
- ✅ Dashboard di gestione delle campagne per gli amministratori
- ✅ Interfaccia facile da usare per i reclami
- ✅ Verifica dell'idoneità in tempo reale
- ✅ Tracciamento della cronologia delle transazioni
- ✅ Tema dell'interfaccia utente cyberpunk
- ✅ Integrazione dell'ecosistema WorldApp

---

## Nederlands

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

Een geavanceerd airdrop-distributieplatform dat **World ID-verificatie** benut om Sybil-aanvallen te voorkomen en eerlijke tokendistributie te garanderen. Perfect voor projecten die Taproot Assets-tokens op Bitcoin Lightning Network lanceren.

**Hoofdfuncties:**
- ✅ World ID-verificatie voor Sybil-bescherming
- ✅ Batch-upload van ontvangers (CSV-ondersteuning)
- ✅ Campagnebeheer-dashboard voor beheerders
- ✅ Gebruiksvriendelijke interface voor vorderingen
- ✅ Geschiktheidscontrole in realtime
- ✅ Transactiegeschiedenis bijhouden
- ✅ Cyberpunk UI-thema
- ✅ WorldApp-ecosysteem integratie

---

## Polski

### 🚀 LiMeiHua Taproot Airdrop w WorldApp

Zaawansowana platforma dystrybucji airdropów, która wykorzystuje **weryfikację World ID** do zapobiegania atakom Sybil i zapewnienia uczciwej dystrybucji tokenów. Idealna dla projektów uruchamiających tokeny Taproot Assets w sieci Bitcoin Lightning Network.

**Główne Funkcje:**
- ✅ Weryfikacja World ID dla ochrony Sybil
- ✅ Przesyłanie odbiorców w partiach (obsługa CSV)
- ✅ Pulpit zarządzania kampanią dla administratorów
- ✅ Przyjazny dla użytkownika interfejs do roszczeń
- ✅ Sprawdzanie uprawnień w czasie rzeczywistym
- ✅ Śledzenie historii transakcji
- ✅ Motyw interfejsu cyberpunk
- ✅ Integracja ekosystemu WorldApp

---

## Svenska

### 🚀 LiMeiHua Taproot Airdrop i WorldApp

En avancerad airdrop-distributionsplattform som utnyttjar **World ID-verifiering** för att förhindra Sybil-attacker och säkerställa rättvis tokendistribution. Perfekt för projekt som lanserar Taproot Assets-tokens på Bitcoin Lightning Network.

**Huvudfunktioner:**
- ✅ World ID-verifiering för Sybil-skydd
- ✅ Batch-uppladdning av mottagare (CSV-stöd)
- ✅ Kampanjhanteringspanel för administratörer
- ✅ Användarvänligt gränssnitt för anspråk
- ✅ Behörighetskontroll i realtid
- ✅ Spårning av transaktionshistorik
- ✅ Cyberpunk UI-tema
- ✅ WorldApp-ekosystemintegration

---

## Українська

### 🚀 LiMeiHua Taproot Airdrop у WorldApp

Передова платформа розповсюдження повітряних капель, яка використовує **верифікацію World ID** для запобігання атакам Sybil та забезпечення справедливого розподілу токенів. Ідеально підходить для проектів, які запускають токени Taproot Assets у мережі Bitcoin Lightning Network.

**Основні функції:**
- ✅ Верифікація World ID для захисту від Sybil
- ✅ Пакетне завантаження одержувачів (підтримка CSV)
- ✅ Панель управління кампаніями для адміністраторів
- ✅ Зручний інтерфейс для претензій
- ✅ Перевірка прав у реальному часі
- ✅ Відстеження історії транзакцій
- ✅ Тема кіберпанку UI
- ✅ Інтеграція екосистеми WorldApp

---

## Čeština

### 🚀 LiMeiHua Taproot Airdrop v WorldApp

Pokročilá platforma pro distribuci airdropů, která využívá **ověření World ID** k prevenci útoků Sybil a zajištění spravedlivé distribuce tokenů. Ideální pro projekty spouštějící tokeny Taproot Assets v síti Bitcoin Lightning Network.

**Hlavní funkce:**
- ✅ Ověření World ID pro ochranu Sybil
- ✅ Hromadné nahrávání příjemců (podpora CSV)
- ✅ Řídicí panel správy kampaní pro správce
- ✅ Uživatelsky přívětivé rozhraní pro nároky
- ✅ Kontrola oprávnění v reálném čase
- ✅ Sledování historie transakcí
- ✅ Motiv cyberpunk UI
- ✅ Integrace ekosystému WorldApp

---

## Română

### 🚀 LiMeiHua Taproot Airdrop în WorldApp

O platformă avansată de distribuție a airdropurilor care utilizează **verificarea World ID** pentru a preveni atacurile Sybil și a asigura o distribuție echitabilă a tokenurilor. Perfectă pentru proiectele care lansează tokenuri Taproot Assets pe Bitcoin Lightning Network.

**Caracteristici principale:**
- ✅ Verificare World ID pentru protecție Sybil
- ✅ Încărcare în lot de destinatari (suport CSV)
- ✅ Tablou de bord de gestionare a campaniei pentru administratori
- ✅ Interfață ușor de utilizat pentru revendicări
- ✅ Verificarea eligibilității în timp real
- ✅ Urmărirea istoricului tranzacțiilor
- ✅ Temă UI cyberpunk
- ✅ Integrare ecosistem WorldApp

---

## Ελληνικά

### 🚀 LiMeiHua Taproot Airdrop στο WorldApp

Μια προηγμένη πλατφόρμα διανομής airdrop που αξιοποιεί την **επαλήθευση World ID** για την πρόληψη επιθέσεων Sybil και τη διασφάλιση δίκαιης διανομής token. Ιδανική για έργα που εκτοξεύουν token Taproot Assets στο δίκτυο Bitcoin Lightning Network.

**Κύρια χαρακτηριστικά:**
- ✅ Επαλήθευση World ID για προστασία Sybil
- ✅ Μαζική μεταφόρτωση παραλήπτων (υποστήριξη CSV)
- ✅ Πίνακας ελέγχου διαχείρισης εκστρατείας για διαχειριστές
- ✅ Φιλικό προς το χρήστη περιβάλλον για αξιώσεις
- ✅ Έλεγχος επιλεξιμότητας σε πραγματικό χρόνο
- ✅ Παρακολούθηση ιστορικού συναλλαγών
- ✅ Θέμα UI cyberpunk
- ✅ Ενσωμάτωση οικοσυστήματος WorldApp

---

## עברית

### 🚀 LiMeiHua Taproot Airdrop ב-WorldApp

פלטפורמת חלוקת airdrop מתקדמת המנצלת **אימות World ID** כדי למנוע התקפות Sybil ולהבטיח חלוקה הוגנת של אסימונים. מושלמת לפרויקטים המשיקים אסימוני Taproot Assets ברשת Bitcoin Lightning Network.

**תכונות ראשיות:**
- ✅ אימות World ID להגנה מפני Sybil
- ✅ העלאה בקבוצות של נמענים (תמיכה CSV)
- ✅ לוח בקרה לניהול קמפיין עבור מנהלים
- ✅ ממשק ידידותי למשתמש לתביעות
- ✅ בדיקת הכשרות בזמן אמת
- ✅ מעקב אחר היסטוריית עסקאות
- ✅ ערכת נושא UI cyberpunk
- ✅ אינטגרציה של אקוסיסטם WorldApp

---

## বাংলা

### 🚀 LiMeiHua Taproot Airdrop in WorldApp

একটি অত্যাধুনিক এয়ারড্রপ বিতরণ প্ল্যাটফর্ম যা **World ID যাচাইকরণ** ব্যবহার করে Sybil আক্রমণ প্রতিরোধ করে এবং ন্যায্য টোকেন বিতরণ নিশ্চিত করে। Bitcoin Lightning Network-এ Taproot Assets টোকেন চালু করার প্রকল্পগুলির জন্য নিখুঁত।

**প্রধান বৈশিষ্ট্য:**
- ✅ Sybil সুরক্ষার জন্য World ID যাচাইকরণ
- ✅ ব্যাচ প্রাপক আপলোড (CSV সমর্থন)
- ✅ প্রশাসকদের জন্য ক্যাম্পেইন ম্যানেজমেন্ট ড্যাশবোর্ড
- ✅ দাবির জন্য ব্যবহারকারী-বান্ধব ইন্টারফেস
- ✅ রিয়েল-টাইম যোগ্যতা পরীক্ষা
- ✅ লেনদেনের ইতিহাস ট্র্যাকিং
- ✅ সাইবারপাংক UI থিম
- ✅ WorldApp ইকোসিস্টেম ইন্টিগ্রেশন

---

## Filipino

### 🚀 LiMeiHua Taproot Airdrop sa WorldApp

Isang advanced na airdrop distribution platform na gumagamit ng **World ID verification** upang maiwasan ang Sybil attacks at masiguro ang patas na token distribution. Perpekto para sa mga proyektong naglalabas ng Taproot Assets tokens sa Bitcoin Lightning Network.

**Mga Pangunahing Tampok:**
- ✅ World ID verification para sa Sybil protection
- ✅ Batch recipient upload (CSV support)
- ✅ Campaign management dashboard para sa admins
- ✅ User-friendly interface para sa claims
- ✅ Real-time eligibility checking
- ✅ Transaction history tracking
- ✅ Cyberpunk UI theme
- ✅ WorldApp ecosystem integration

---

## Kiswahili

### 🚀 LiMeiHua Taproot Airdrop katika WorldApp

Jukwaa la usambazaji wa airdrop la hali ya juu linalotumiauthibitisho wa World ID** ili kuzuia shambuzi za Sybil na kuhakikisha usambazaji wa token unaofanana. Bora kwa miradi inayotoa tokens ya Taproot Assets kwenye Bitcoin Lightning Network.

**Sifa za Msingi:**
- ✅ Uthibitisho wa World ID kwa ulinzi wa Sybil
- ✅ Upakiaji wa walengwa kwa batch (msaada wa CSV)
- ✅ Dashibodi ya usimamizi wa kampeni kwa waongozaji
- ✅ Kiolesura kinachofaa kwa watumiaji kwa madai
- ✅ Ukaguzi wa uhalifu katika wakati halisi
- ✅ Ufuataji wa historia ya miamala
- ✅ Mandhari ya UI ya cyberpunk
- ✅ Ujumuishaji wa mazingira ya WorldApp

---

## 🔒 Security & Privacy

- **World ID Verified**: Cryptographic proof of personhood
- **Sybil Protection**: One person = one claim
- **Batch Processing**: Efficient large-scale distribution
- **Immutable Records**: All claims permanently recorded
- **Rate Limiting**: Prevent abuse and spam
- **Input Validation**: Comprehensive data validation

## 📞 Support & Community

- 📧 Email: support@limeihua-airdrop.com
- 🐛 GitHub Issues: [Report a bug](https://github.com/kanutsanan1988/LiMeiHua-Taproot-Airdrop-in-WorldApp/issues)
- 💬 Discord: [Join community](https://discord.gg/limeihua)
- 🌐 Website: https://limeihua-airdrop.com

## 📄 License

MIT License - See LICENSE file for details

## 👏 Dedication

This software is dedicated to **LiMeiHua Grand Mother (ท่านผู้เฒ่าหลี่เหมยฮัว)** as a modern financial infrastructure to support massive money flow.

Created by **Mr. Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)**

🔗 [Visit Creator's GPT](https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna)

---

**Happy Airdrop Distribution with World ID! 🎁🌍💰**
