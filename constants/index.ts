export const GenderOptions = ['男性', '女性', '不便透露'];

export const AppId = ['無限', 'kkschoole'];

export const OccupationStatus = ['全職', '全職+兼職', '兼職', '其他']

export const RegisterFormDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: new Date(Date.now()),
    gender: "男性" as Gender,
    address: "",
    occupation: "",
    primaryProgram: "",
    appId: "無限" as "kkschool",
    occupationStatus: "",
    specialSkill: "",
    bankCode: "",
    bankAccountNumber: "",
    bankBook: [],
    treatmentConsent: false,
    disclosureConsent: false,
    privacyConsent: false,
    monthlyProductivity: "",
};

export const IdentificationTypes = [
    "Birth Certificate",
    "Driver's License",
    "Medical Insurance Card/Policy",
    "Military ID Card",
    "National Identity Card",
    "Passport",
    "Resident Alien Card (Green Card)",
    "Social Security Card",
    "State ID Card",
    "Student ID Card",
    "Voter ID Card",
];

export const Program = [
    {
        "image": "/assets/images/logo-full.svg",
        "label": "暫時不接",
        "value": "AI-00-00"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "Data/AI 應用案例",
        "value": "AI-01-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "資料分析（資料探索與資料視覺化）",
        "value": "AI-02-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "資料收集與資料庫（資料爬蟲）",
        "value": "AI-03-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "結構型資料的分析案例",
        "value": "AI-04-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "非結構型資料的分析案例",
        "value": "AI-05-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "資料科學在真實世界的應用系統",
        "value": "AI-06-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "內容創作發想",
        "value": "ALL-01-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "SEO優化",
        "value": "ALL-02-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "社群經營概論",
        "value": "ALL-03-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "Meta廣告投放",
        "value": "ALL-04-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "Google Ads 廣告投放",
        "value": "ALL-05-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "基礎排版",
        "value": "DE-01-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "明信片系列專案",
        "value": "DE-02-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "海報製作",
        "value": "DE-03-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "平面廣告製作",
        "value": "DE-04-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "角色設計 IP設計",
        "value": "DE-05-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "logo 與標準字",
        "value": "DE-06-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "圖像傳達",
        "value": "DE-07-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "商業平面設計",
        "value": "DE-08-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "插畫作品集建立/優化",
        "value": "DE-09-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "平面設計基礎專案",
        "value": "DE-010-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "基礎_插畫角色設計",
        "value": "DE-11-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "logo 與標準字",
        "value": "DE-12-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "圖像傳達",
        "value": "DE-13-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "進階_角色設計 IP設計",
        "value": "DE-14-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "商業平面設計",
        "value": "DE-15-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "CIS專案_企劃視覺設計",
        "value": "DE-16-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "包裝設計",
        "value": "DE-17-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "商務提案_作品集建立",
        "value": "DE-18-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "插畫設計＿IP角色企劃 / 社群經營",
        "value": "DE-19-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "短影音系列企劃",
        "value": "KOL-01-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "剪輯拍攝企劃",
        "value": "KOL-02-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "音樂性長片",
        "value": "KOL-03-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "廣告影片製作",
        "value": "KOL-04-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "劇情性動態創作",
        "value": "KOL-05-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "C4D 基礎入門",
        "value": "KOL-06-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "2D動態設計",
        "value": "KOL-07-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "3D動態設計(C4D+Octane渲染器)",
        "value": "KOL-08-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "字卡模板設計",
        "value": "KOL-09-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "影音接案作品建立/優化",
        "value": "KOL-10-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "3D動態設計-遊戲風格(Blender+Zbrush)",
        "value": "KOL-11-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "2D動態設計(Live 2D)",
        "value": "KOL-12-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "APP主題頁面",
        "value": "PRD-01-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "一頁式網站",
        "value": "PRD-02-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "Redesign App/ Redesign Web",
        "value": "PRD-03-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "生活應用類型 App/Web",
        "value": "PRD-04-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "系統管理平台",
        "value": "PRD-05-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "一頁式靜態網頁（個人網頁、單頁式活動頁面）",
        "value": "WEB-01-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "多頁式靜態網頁（官方網站、電商前台）",
        "value": "WEB-02-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "互動式動態網頁（純前端版本）",
        "value": "WEB-03-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "互動式動態網頁（後端）",
        "value": "WEB-04-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "互動式動態網頁（CRM 管理系統、電商網站、內容平台）",
        "value": "WEB-05-01"
    },
    {
        "image": "/assets/images/logo-full.svg",
        "label": "互動式動態網頁（進階版）",
        "value": "WEB-06-01"
    }
]

export const StatusIcon = {
    scheduled: "/assets/icons/check.svg",
    pending: "/assets/icons/pending.svg",
    cancelled: "/assets/icons/cancelled.svg",
};

export const StudentProgram = [

    {
        image: "/assets/images/logo-full.svg",
        name: "John Green",
        studentName: "林克",
        StudentEmail: "link@gmail.com",
        program: "AI-01-01",
        programTopic: "Data/AI 應用案例",
        programStatus: "進行中",
        programStartDate: "2024/08/16",
        programEndDate: "2026/08/16",
        isVerify: false,
        studentProgramId: "afpwoehf29fwfae",
    },
    {
        image: "/assets/images/logo-full.svg",
        name: "",
        studentName: "小豬",
        StudentEmail: "link@gmail.com",
        program: "AI-02-02",
        programTopic: "Data/AI 水彩應用",
        programStatus: "進行中",
        programStartDate: "2024/08/16",
        programEndDate: "2026/08/16",
        isVerify: false,
        studentProgramId: "afpwoehfwefwef29fwfae",
    },

];