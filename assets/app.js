/**
 * (주)일신아이디 통합 공식 웹사이트 인터랙션 스크립트
 */

// 1. 공사실적 현황 데이터 (2024년 4월 지명원 수록 135개 전체 실적)
const TRACK_RECORDS = [
  { id: 1, title: "서울 서정초등학교 돌봄교실 환경개선공사", category: "care", region: "서울", target: "초등학교" },
  { id: 2, title: "서울 연광초등학교 돌봄교실 인테리어공사", category: "care", region: "서울", target: "초등학교" },
  { id: 3, title: "부천 신흥초등학교 돌봄교실 인테리어공사", category: "care", region: "부천", target: "초등학교" },
  { id: 4, title: "광명 하안남초등학교 돌봄교실 환경개선공사", category: "care", region: "광명", target: "초등학교" },
  { id: 5, title: "광명 하일초등학교 돌봄교실 환경개선공사", category: "care", region: "광명", target: "초등학교" },
  { id: 6, title: "광명 광성초등학교 돌봄교실 환경개선공사", category: "care", region: "광명", target: "초등학교" },
  { id: 7, title: "수원 가온초등학교 돌봄교실 환경개선공사", category: "care", region: "수원", target: "초등학교" },
  { id: 8, title: "수원 효탑초등학교 돌봄교실 환경개선공사", category: "care", region: "수원", target: "초등학교" },
  { id: 9, title: "안산 광덕초등학교 돌봄교실 환경개선공사", category: "care", region: "안산", target: "초등학교" },
  { id: 10, title: "화성 동양초등학교 돌봄교실 환경개선공사", category: "care", region: "화성", target: "초등학교" },
  { id: 11, title: "화성 활초초등학교 돌봄교실 환경개선공사", category: "care", region: "화성", target: "초등학교" },
  { id: 12, title: "의정부 신동초등학교 돌봄교실 환경개선공사", category: "care", region: "의정부", target: "초등학교" },
  { id: 13, title: "광명 안현초등학교 돌봄교실 환경개선공사", category: "care", region: "광명", target: "초등학교" },
  { id: 14, title: "하안남초등학교 돌봄교실 인테리어공사", category: "care", region: "광명", target: "초등학교" },
  { id: 15, title: "안산 석수초등학교 돌봄교실 바닥공사", category: "care", region: "안산", target: "초등학교" },
  { id: 16, title: "수원 안룡초등학교 화장실 리모델링 공사", category: "facility", region: "수원", target: "초등학교" },
  { id: 17, title: "부천 복사초등학교 음악실 리모델링 공사", category: "special", region: "부천", target: "초등학교" },
  { id: 18, title: "부천 복사초등학교 미술실 환경개선공사", category: "special", region: "부천", target: "초등학교" },
  { id: 19, title: "안산 원일초등학교 학부모상담실 환경개선공사", category: "special", region: "안산", target: "초등학교" },
  { id: 20, title: "서울 서정초등학교 행정실 환경개선공사", category: "office", region: "서울", target: "초등학교" },
  { id: 21, title: "이천 사동초등학교 보건실 리모델링공사", category: "special", region: "이천", target: "초등학교" },
  { id: 22, title: "안양 삼봉초등학교 영어전용교실 인테리어공사", category: "special", region: "안양", target: "초등학교" },
  { id: 23, title: "광명 안현초등학교 보건실 환경개선공사", category: "special", region: "광명", target: "초등학교" },
  { id: 24, title: "수원 고색초 후관 4층 복도위험시설물 개선공사", category: "facility", region: "수원", target: "초등학교" },
  { id: 25, title: "서울 탑동초등학교 게시판 및 특수교실 환경개선공사", category: "special", region: "서울", target: "초등학교" },
  { id: 26, title: "서울 탑동초등학교 교장실외 환경개선공사", category: "office", region: "서울", target: "초등학교" },
  { id: 27, title: "부천 복사초등학교 영어교실 바닥 및 도장공사", category: "facility", region: "부천", target: "초등학교" },
  { id: 28, title: "수원 고색초 모빌렉 이전설치공사", category: "facility", region: "수원", target: "초등학교" },
  { id: 29, title: "수원 고색초 캐노피 및 외부방화문 설치공사", category: "facility", region: "수원", target: "초등학교" },
  { id: 30, title: "서울 언남고등학교 특수학급 환경개선공사", category: "special", region: "서울", target: "중고교" },
  { id: 31, title: "서울 홍대부속여고 직원휴게실 인테리어공사", category: "office", region: "서울", target: "중고교" },
  { id: 32, title: "서울 홍대부속여중 학생탈의실 인테리어공사", category: "facility", region: "서울", target: "중고교" },
  { id: 33, title: "시흥 군자중학교 다목적실 인테리어공사", category: "special", region: "시흥", target: "중고교" },
  { id: 34, title: "안산 석수중학교 특별교실 인테리어공사", category: "special", region: "안산", target: "중고교" },
  { id: 35, title: "광명 진성초등학교 과학실 환경개선공사", category: "special", region: "광명", target: "초등학교" },
  { id: 36, title: "서울 일신여상 탈의실 환경개선공사", category: "facility", region: "서울", target: "중고교" },
  { id: 37, title: "파주 세경고등학교 실습동 환경개선공사", category: "special", region: "파주", target: "중고교" },
  { id: 38, title: "서울 봉림중학교 홈베이스구축 인테리어공사", category: "special", region: "서울", target: "중고교" },
  { id: 39, title: "부천 부명고등학교 화장실 리모델링공사", category: "facility", region: "부천", target: "중고교" },
  { id: 40, title: "의정부 호원고등학교 환경개선공사", category: "facility", region: "의정부", target: "중고교" },
  { id: 41, title: "의정부 송현고등학교 환경개선공사", category: "facility", region: "의정부", target: "중고교" },
  { id: 42, title: "광명중학교 축구부쉼터 환경개선공사", category: "special", region: "광명", target: "중고교" },
  { id: 43, title: "서울 창북중학교 교무실 환경개선공사", category: "office", region: "서울", target: "중고교" },
  { id: 44, title: "서울 방배중학교 신설교실, 교무실 환경개선공사", category: "office", region: "서울", target: "중고교" },
  { id: 45, title: "서울 정화여상 과학실 인테리어공사", category: "special", region: "서울", target: "중고교" },
  { id: 46, title: "서울 홍대부속여중 방송실, 보건실, 도서실 인테리어공사", category: "special", region: "서울", target: "중고교" },
  { id: 47, title: "안산 송호고 미술실 환경개선공사", category: "special", region: "안산", target: "중고교" },
  { id: 48, title: "안산 단원고 특별교실의 일반교실 변경공사", category: "special", region: "안산", target: "중고교" },
  { id: 49, title: "시흥 서해고등학교 회의실 구축공사", category: "office", region: "시흥", target: "중고교" },
  { id: 50, title: "서울 덕성여중 로봇동아리실 붙박이장설치공사외 다수", category: "special", region: "서울", target: "중고교" },
  { id: 51, title: "연천 백학중학교 상담실 리모델링공사", category: "special", region: "연천", target: "중고교" },
  { id: 52, title: "광명 진성고등학교 교장실, 교무실 환경개선공사", category: "office", region: "광명", target: "중고교" },
  { id: 53, title: "광명 가림중학교 바닥교체공사", category: "facility", region: "광명", target: "중고교" },
  { id: 54, title: "안산 선부중학교 특별교실 인테리어공사", category: "special", region: "안산", target: "중고교" },
  { id: 55, title: "성남 내정중학교 바닥교체공사", category: "facility", region: "성남", target: "중고교" },
  { id: 56, title: "부천남중학교 행정실 및 2F교실 환경개선공사", category: "office", region: "부천", target: "중고교" },
  { id: 57, title: "서울 광문고등학교 1F교실 환경개선공사외 다수", category: "special", region: "서울", target: "중고교" },
  { id: 58, title: "광남중학교 균열보수 및 기타시설물보수공사", category: "facility", region: "광명", target: "중고교" },
  { id: 59, title: "안서중학교 균열보수 및 기타시설물보수공사", category: "facility", region: "광명", target: "중고교" },
  { id: 60, title: "송산고등학교 교육환경개선 무석면텍스공사", category: "facility", region: "화성", target: "중고교" },
  { id: 61, title: "신천중학교 실내체육실 설치공사", category: "special", region: "시흥", target: "중고교" },
  { id: 62, title: "용인 한국외대부고 기숙사복도 재도장공사", category: "facility", region: "용인", target: "중고교" },
  { id: 63, title: "충현중학교 2층상담실 칸막이설치공사", category: "special", region: "광명", target: "중고교" },
  { id: 64, title: "오산 광성초등학교 보통교실전환공사", category: "facility", region: "오산", target: "초등학교" },
  { id: 65, title: "안산 선일중학교 실내체육실 설치공사", category: "special", region: "안산", target: "중고교" },
  { id: 66, title: "성안초등학교 간이실내체육시설공사", category: "special", region: "안산", target: "초등학교" },
  { id: 67, title: "중동초등학교 과학실, 미술실 현대화인테리어공사", category: "special", region: "부천", target: "초등학교" },
  { id: 68, title: "상동초등학교 다목적교실 환경개선공사", category: "special", region: "부천", target: "초등학교" },
  { id: 69, title: "부천여고 학생식당 바닥타일공사", category: "facility", region: "부천", target: "중고교" },
  { id: 70, title: "중흥고등학교 급식실 트렌치교체공사", category: "facility", region: "부천", target: "중고교" },
  { id: 71, title: "소하중학교 도서실 리모델링공사", category: "special", region: "광명", target: "중고교" },
  { id: 72, title: "가림중학교 교실 블라인드교체 및 도장공사", category: "facility", region: "광명", target: "중고교" },
  { id: 73, title: "하안북초등학교병설유치원 1, 2F 앵글제작설치공사", category: "special", region: "광명", target: "유치원" },
  { id: 74, title: "소일초등학교 주차장트렌치교체공사", category: "facility", region: "광명", target: "초등학교" },
  { id: 75, title: "안양서초등학교 과학실 실사암막블라인드설치공사", category: "special", region: "안양", target: "초등학교" },
  { id: 76, title: "영등포공고 타일실습실, 건축시공실습실 리모델링공사", category: "special", region: "서울", target: "중고교" },
  { id: 77, title: "운흥초등학교병설유치원 실내놀이터조성공사", category: "special", region: "시흥", target: "유치원" },
  { id: 78, title: "반월중학교 과학실 리모델링공사", category: "special", region: "안산", target: "중고교" },
  { id: 79, title: "원종고 간이체육실 설치공사", category: "special", region: "부천", target: "중고교" },
  { id: 80, title: "광명초 교무실파티션 및 붙박이장설치공사", category: "office", region: "광명", target: "초등학교" },
  { id: 81, title: "하안북중학교 남, 여탈의실환경개선공사", category: "facility", region: "광명", target: "중고교" },
  { id: 82, title: "하일초 복합문화공간조성공사", category: "special", region: "광명", target: "초등학교" },
  { id: 83, title: "정재초등학교 과학실 환경개선공사", category: "special", region: "안산", target: "초등학교" },
  { id: 84, title: "안산부곡초 도서실 환경개선공사", category: "special", region: "안산", target: "초등학교" },
  { id: 85, title: "영등포공고 체육관화장실 환경개선공사", category: "facility", region: "서울", target: "중고교" },
  { id: 86, title: "별망초 다목적실 교육환경개선공사", category: "special", region: "안산", target: "초등학교" },
  { id: 87, title: "안산해양초 방송실 환경개선공사", category: "special", region: "안산", target: "초등학교" },
  { id: 88, title: "용호고 과학실외 싱크대교체외 리모델링공사", category: "special", region: "군포", target: "중고교" },
  { id: 89, title: "안양여고 특별실 개선공사", category: "special", region: "안양", target: "중고교" },
  { id: 90, title: "영등포공고 건축과 1층실습실 리모델링공사", category: "special", region: "서울", target: "중고교" },
  { id: 91, title: "안양남초 DOOR 인테리어필름교체공사", category: "facility", region: "안양", target: "초등학교" },
  { id: 92, title: "하안초등학교 구령대 바닥보수공사", category: "facility", region: "광명", target: "초등학교" },
  { id: 93, title: "성안초병설유치원 환경개선공사", category: "special", region: "안산", target: "유치원" },
  { id: 94, title: "가림중학교 교실내커텐철거후 블라인드설치공사", category: "facility", region: "광명", target: "중고교" },
  { id: 95, title: "해누리유치원 바닥교체공사", category: "facility", region: "서울", target: "유치원" },
  { id: 96, title: "광명북초 교실블라인드설치공사", category: "facility", region: "광명", target: "초등학교" },
  { id: 97, title: "광명공고 급식실 벽체SUS보강공사", category: "facility", region: "광명", target: "중고교" },
  { id: 98, title: "육군사관학교 전체교실 환경개선공사", category: "public", region: "서울", target: "관공서" },
  { id: 99, title: "광명 진성고 과학실험실 환경개선공사", category: "special", region: "광명", target: "중고교" },
  { id: 100, title: "광명 진성고 교장실, 교무실 이전 인테리어공사", category: "office", region: "광명", target: "중고교" },
  { id: 101, title: "서울 정화여자상업고 과학실험실 환경개선공사", category: "special", region: "서울", target: "중고교" },
  { id: 102, title: "연천왕산초 도서실블라인드교체공사", category: "facility", region: "연천", target: "초등학교" },
  { id: 103, title: "파주문산초 노후바닥교체공사", category: "facility", region: "파주", target: "초등학교" },
  { id: 104, title: "용인 나곡초 시청각실개선공사", category: "special", region: "용인", target: "초등학교" },
  { id: 105, title: "부천소사초외 8개교 시설보수공사 (부천교육지원청 수의발주)", category: "public", region: "부천", target: "관공서" },
  { id: 106, title: "소안초등학교 급식실트렌치교체공사", category: "facility", region: "부천", target: "초등학교" },
  { id: 107, title: "동곡초 급식실 트렌치교체공사", category: "facility", region: "부천", target: "초등학교" },
  { id: 108, title: "내기초 화장실 환경개선공사", category: "facility", region: "평택", target: "초등학교" },
  { id: 109, title: "안현초 옹벽 안전망보수공사", category: "facility", region: "광명", target: "초등학교" },
  { id: 110, title: "강서고 신관 5층 강당화장실개보수공사", category: "facility", region: "서울", target: "중고교" },
  { id: 111, title: "가림초 교사동앞 보행로개선공사외 기타 다수", category: "facility", region: "광명", target: "초등학교" },
  { id: 112, title: "진명여고 협력예술활동실구축공사", category: "special", region: "서울", target: "중고교" },
  { id: 113, title: "가림중학교 서고바닥공사", category: "facility", region: "광명", target: "중고교" },
  { id: 114, title: "광명경영회계고 신관 1층 특수학급 환경개선공사", category: "special", region: "광명", target: "중고교" },
  { id: 115, title: "철산중학교 식당, 상담실, 장비실 리모델링공사", category: "special", region: "광명", target: "중고교" },
  { id: 116, title: "서면초등학교 교육환경개선공사", category: "facility", region: "광명", target: "초등학교" },
  { id: 117, title: "소하초 교사동 1층출입구 방풍실조성공사", category: "facility", region: "광명", target: "초등학교" },
  { id: 118, title: "운산고 2F 나움실 환경개선공사", category: "special", region: "광명", target: "중고교" },
  { id: 119, title: "고강초 연구실 환경개선공사", category: "office", region: "부천", target: "초등학교" },
  { id: 120, title: "삼성초병설유치원 화장실개선공사", category: "facility", region: "안양", target: "유치원" },
  { id: 121, title: "광남중학교 환경개선공사", category: "facility", region: "광명", target: "중고교" },
  { id: 122, title: "금정중학교 체육관 환경개선공사", category: "special", region: "군포", target: "중고교" },
  { id: 123, title: "안산부곡초 바닥교체 및 난간교체공사", category: "facility", region: "안산", target: "초등학교" },
  { id: 124, title: "안양여고 가사실 리모델링공사", category: "special", region: "안양", target: "중고교" },
  { id: 125, title: "광명교육지원청 전체화장실개선공사", category: "public", region: "광명", target: "관공서" },
  { id: 126, title: "장위중학교 상담실 인테리어공사", category: "special", region: "서울", target: "중고교" },
  { id: 127, title: "안양여중 보차도분리공사", category: "facility", region: "안양", target: "중고교" },
  { id: 128, title: "경기항공고등학교 급식실벽체보강공사", category: "facility", region: "광명", target: "중고교" }
];

// 2. 포트폴리오 8대 핵심 프로젝트 데이터 (워드프레스 실물 사진 연계)
const PORTFOLIO_ITEMS = [
  {
    id: "public-office",
    category: "public",
    categoryLabel: "관공서",
    title: "관공서 인테리어·리모델링",
    client: "공공기관 / 지자체 청사",
    period: "2023 - 2024",
    location: "서울 및 수도권 관공서",
    image: "./assets/images/ilshin-public-1.jpg",
    summary: "관공서 및 공공기관 업무공간의 기능성과 내구성을 극대화한 맞춤형 시공",
    description: "공공기관 및 관공서 민원실, 집무실, 회의실 리모델링 프로젝트입니다. 내구성이 뛰어난 친환경 마감재와 불연재를 적용하여 공공업무 효율성을 높이고 시민들의 편리한 방문 동선을 고려하여 시공되었습니다.",
    features: ["여성기업 G2B 수의계약 제도 활용", "난연 및 친환경 공인 자재 전면 적용", "업무 공백 최소화를 위한 야간/주말 공정 관리", "철저한 하자보수 2년 무상 보증"]
  },
  {
    id: "faculty-office",
    category: "school",
    categoryLabel: "학교",
    title: "교무실·행정공간 환경개선",
    client: "서울·경기 초·중·고교",
    period: "2023 - 2024",
    location: "수도권 교육청 관할 학교",
    image: "./assets/images/ilshin-faculty-1.jpg",
    summary: "업무 효율과 교직원 휴게 기능을 조화롭게 통합한 스마트 교무실 개선",
    description: "교직원의 원활한 업무 협업과 휴식을 지원하는 통합 교무행정 공간 리모델링입니다. 맞춤형 수납장, 방음 파티션, 전자기기 배선 덕트 매립 등 실용성과 쾌적성을 모두 충족시켰습니다.",
    features: ["모듈형 업무 데스크 & 맞춤형 락커 시공", "친환경 저취 도료 및 방염 패브릭 벽체", "효율적인 동선 분리 및 쾌적한 조명 조도 설계"]
  },
  {
    id: "kindergarten",
    category: "school",
    categoryLabel: "학교/유치원",
    title: "병설유치원 환경개선",
    client: "초등학교 병설유치원",
    period: "2023 - 2024",
    location: "광명, 안산, 시흥 초등학교",
    image: "./assets/images/ilshin-kindergarten-1.jpg",
    summary: "유아의 신체 특성과 안전성을 최우선으로 고려한 병설유치원 교육·위생공간",
    description: "어린이의 안전을 위해 모든 코너에 라운드 완충재를 적용하고, 친환경 E0 목재와 무독성 바닥재를 사용하여 아토피 걱정 없는 쾌적한 돌봄 및 놀이 공간을 구축했습니다.",
    features: ["모서리 완충 쿠션 및 안전 도어스토퍼", "친환경 최고등급(E0) 자재 및 방수 위생 마감", "아이들의 창의력을 자극하는 따뜻한 파스텔톤 컬러"]
  },
  {
    id: "music-room",
    category: "special",
    categoryLabel: "특별실",
    title: "음악실 환경개선",
    client: "초·중학교 예술교과실",
    period: "2022 - 2023",
    location: "부천 복사초 등",
    image: "./assets/images/ilshin-music-1.jpg",
    summary: "음향 잔향과 수업 동선을 과학적으로 배려한 음악실 및 방음 연습공간",
    description: "타공 흡음판과 친환경 차음재를 복합 시공하여 외부 소음 간섭을 차단하고 실내 음향 밸런스를 최적화했습니다. 악기 전용 보관장과 다단식 합창대 설치로 수업 집중도를 극대화했습니다.",
    features: ["고성능 친환경 흡음재 및 방음 도어 시공", "악기별 특성을 고려한 맞춤형 환기 수납 시스템", "시각적 리듬감을 살린 우드 앤 베이지 인테리어"]
  },
  {
    id: "broadcast-room",
    category: "special",
    categoryLabel: "특별실",
    title: "방송실 환경개선",
    client: "초·중·고교 방송미디어실",
    period: "2023 - 2024",
    location: "서울, 안산해양초 등",
    image: "./assets/images/ilshin-broadcast-1.jpg",
    summary: "스튜디오 흡음과 방송 장비 배치를 일체화한 미디어 방송실 리모델링",
    description: "교내 방송 송출 및 영상 미디어 제작이 가능하도록 컨트롤룸과 아나운서 스튜디오를 분리 구획하고 완벽한 차음 및 전자기기 배선 인프라를 구축했습니다.",
    features: ["스튜디오 차음벽체 및 이중창 시공", "장비 랙(Rack) 및 전선 트레이 은폐 설계", "LED 스튜디오 방송 조명 및 암막 블라인드"]
  },
  {
    id: "multipurpose",
    category: "special",
    categoryLabel: "특별실",
    title: "체육실·과학실·다목적실",
    client: "초·중·고등학교",
    period: "2022 - 2024",
    location: "광명 진성고, 시흥 군자중 등",
    image: "./assets/images/ilshin-multipurpose-1.jpg",
    summary: "수업 목적에 맞춘 실내체육실, 과학실험실, 다목적실의 기능성 특화 시공",
    description: "충격 흡수 스포츠 탄성 바닥재를 적용한 간이 체육실과, 내화학성 싱크대 및 환기 후드가 완비된 현대식 과학실험실을 구축하여 학생들의 능동적인 학습을 지원합니다.",
    features: ["충격 완화 스포츠 바닥 시스템", "실험실 전용 내화학 마감재 및 긴급 세안 설비", "다목적 이동식 가구 배치 구조"]
  },
  {
    id: "counsel-room",
    category: "school",
    categoryLabel: "학교",
    title: "상담실·홈베이스·휴게실",
    client: "초·중·고교 위(Wee)클래스",
    period: "2023 - 2024",
    location: "서울 봉림중, 안산 원일초 등",
    image: "./assets/images/ilshin-counsel-1.jpg",
    summary: "심리적 안정감과 소통을 돕는 학교 공용공간 및 위클래스 상담실 개선",
    description: "학생과 학부모의 편안한 상담을 위한 차음 상담실과, 휴식 및 자율 학습을 위한 오픈형 홈베이스를 조성하여 학교 생활의 만족도를 높였습니다.",
    features: ["개인 프라이버시 보호를 위한 방음벽 시공", "따뜻하고 아늑한 패브릭 & 조명 연출", "홈베이스 다목적 휴게 벤치 및 라운지형 구조"]
  },
  {
    id: "school-other",
    category: "facility",
    categoryLabel: "시설개선",
    title: "기타 학교 시설물 개선",
    client: "교육지원청 관할 학교",
    period: "2022 - 2024",
    location: "수도권 교육청",
    image: "./assets/images/ilshin-school-other-1.jpg",
    summary: "학교 내외부 시설물 보수, 방풍실, 트렌치 교체, 노후 바닥 개선",
    description: "학교 출입구 방풍실 신설, 급식실 트렌치 스테인리스 보강, 노후 화장실 및 복도 위험시설물 보수 등 안전사고를 사전 예방하는 시설물 유지관리 공사를 종합적으로 수행합니다.",
    features: ["급식실 위생 트렌치 및 SUS 보강공사", "출입구 방풍실 및 옥외 캐노피 시공", "노후 복도 무석면 텍스 및 난간 안전 강화"]
  }
];

// 3. 면허 및 등록증 실물 데이터
const CERTIFICATES = [
  {
    id: "cert-business",
    title: "사업자등록증",
    subtitle: "(주)일신아이디 대표자 문희정",
    desc: "광명세무서 등록 / 건설업(실내건축공사업, 건축공사업)",
    image: "./assets/images/ilshin-cert-business-reg.jpg"
  },
  {
    id: "cert-construction",
    title: "건축공사업 등록증",
    subtitle: "국토교통부 / 시·도지사 정식 등록",
    desc: "종합건설업 자격 요건 및 자본금·기술인력 적격 보유",
    image: "./assets/images/ilshin-cert-construction.jpg"
  },
  {
    id: "cert-interior",
    title: "실내건축공사업 등록증",
    subtitle: "전문건설업 공인 면허",
    desc: "실내건축 및 인테리어·리모델링 전문 시공 자격",
    image: "./assets/images/ilshin-cert-interior.jpg"
  },
  {
    id: "cert-women",
    title: "여성기업 확인서",
    subtitle: "중소벤처기업부 장관 공인",
    desc: "여성기업 지원에 관한 법률에 따른 공공기관 수의계약 우대",
    image: "./assets/images/ilshin-cert-women.jpg"
  }
];

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  initPanoramaTitle();
  initHeader();
  initCompanyTabs();
  initPortfolio();
  initTrackRecords();
  initCertificatesLightbox();
  initContactForm();
  initQuoteModal();
  initScrollTop();
});

// --- 섹션 표시 / 숨기기 SPA 라우터 ---
const PAGE_SECTIONS = ["about", "services", "portfolio", "records", "licenses", "contact"];
let currentSection = null;

window.showSection = function(sectionId) {
  const footer = document.getElementById("main-footer");

  // 같은 섹션을 다시 클릭하면 닫고 히어로로 복귀
  if (currentSection === sectionId) {
    hideAllSections();
    currentSection = null;
    updateNavActiveState(null);
    if (footer) footer.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // 모든 섹션 숨기기
  hideAllSections();

  // 목표 섹션 보이기
  const target = document.getElementById(sectionId);
  if (!target) return;

  target.style.display = "block";
  target.style.opacity = "0";
  target.style.transform = "translateY(12px)";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      target.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      target.style.opacity = "1";
      target.style.transform = "translateY(0)";
    });
  });

  // 푸터 표시
  if (footer) {
    footer.style.display = "block";
    footer.style.opacity = "0";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        footer.style.transition = "opacity 0.4s ease 0.2s";
        footer.style.opacity = "1";
      });
    });
  }

  currentSection = sectionId;
  updateNavActiveState(sectionId);

  // 헤더 바로 아래로 부드럽게 스크롤
  const header = document.getElementById("main-header");
  const headerH = header ? header.offsetHeight : 80;
  const topBar = document.querySelector("body > div:first-child");
  const topBarH = topBar ? topBar.offsetHeight : 40;
  window.scrollTo({ top: topBarH + headerH, behavior: "smooth" });
};

function hideAllSections() {
  PAGE_SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.transition = "";
      el.style.display = "none";
      el.style.opacity = "";
      el.style.transform = "";
    }
  });
}

function updateNavActiveState(activeSectionId) {
  const allNavLinks = document.querySelectorAll("#main-nav a, #mobile-menu-drawer a[href^='#']");
  allNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href === "#" + activeSectionId) {
      link.classList.add("nav-active");
    } else {
      link.classList.remove("nav-active");
    }
  });
}

// A-0. 앞페이지 (주)일신아이디 파노라마 한 자씩 타이핑 & 완성 연출
function initPanoramaTitle() {
  const wrapper = document.getElementById("panorama-wrapper");
  const titleEl = document.getElementById("panorama-title");
  const cursorEl = document.getElementById("panorama-cursor");

  if (!wrapper || !titleEl || !cursorEl) return;

  const fullText = "일신아이디";
  const charArray = Array.from(fullText); // ['일', '신', '아', '이', '디']
  let charIndex = 0;
  let isDeleting = false;

  function typeStep() {
    if (!isDeleting) {
      charIndex++;
      titleEl.textContent = charArray.slice(0, charIndex).join("");

      if (charIndex === charArray.length) {
        // 모든 글자가 다 나온 순간: 파노라마 골든 스윕 연출 활성화 및 커서 숨김
        wrapper.classList.add("complete");
        cursorEl.classList.add("hide");

        // 완성 상태를 방문자가 충분히 감상할 수 있도록 4초간 유지
        setTimeout(() => {
          isDeleting = true;
          wrapper.classList.remove("complete");
          cursorEl.classList.remove("hide");
          typeStep();
        }, 4000);
        return;
      }

      // 글자 하나씩 나타나는 타이핑 속도 (약 200ms)
      setTimeout(typeStep, 200);
    } else {
      charIndex--;
      titleEl.textContent = charArray.slice(0, charIndex).join("");

      if (charIndex === 0) {
        isDeleting = false;
        // 다시 시작 전 잠깐 대기 (500ms)
        setTimeout(typeStep, 500);
        return;
      }

      // 지워지는 속도 (약 90ms)
      setTimeout(typeStep, 90);
    }
  }

  // 첫 시작 전 350ms 대기 후 시작
  titleEl.textContent = "";
  setTimeout(typeStep, 350);
}

// A. 헤더 스크롤 및 모바일 메뉴
function initHeader() {
  const header = document.getElementById("main-header");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu-drawer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("hidden");
      mobileToggle.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

// B. 회사소개 서브 탭 기능
function initCompanyTabs() {
  const tabBtns = document.querySelectorAll(".company-tab-btn");
  const tabPanes = document.querySelectorAll(".company-tab-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.add("hidden"));

      btn.classList.add("active");
      const targetPane = document.getElementById(`tab-content-${targetId}`);
      if (targetPane) targetPane.classList.remove("hidden");
    });
  });
}

// C. 포트폴리오 갤러리 렌더링 & 필터 & 모달
function initPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  const filterBtns = document.querySelectorAll(".portfolio-filter-btn");

  if (!grid) return;

  function render(items) {
    grid.innerHTML = items.map(item => `
      <div class="portfolio-card" data-id="${item.id}">
        <div class="relative h-56 overflow-hidden bg-slate-100">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
          <div class="absolute top-3 left-3">
            <span class="bg-[#0b192c]/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
              ${item.categoryLabel}
            </span>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs text-slate-400 font-bold mb-1.5 flex justify-between">
              <span>${item.client}</span>
              <span>${item.period}</span>
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              ${item.summary}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
            <span>상세보기</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
        </div>
      </div>
    `).join("");

    // 카드 클릭 시 모달 열기
    grid.querySelectorAll(".portfolio-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        const project = PORTFOLIO_ITEMS.find(p => p.id === id);
        if (project) openPortfolioModal(project);
      });
    });
  }

  render(PORTFOLIO_ITEMS);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      const filtered = f === "all" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === f);
      render(filtered);
    });
  });
}

function openPortfolioModal(item) {
  const modal = document.getElementById("portfolio-modal");
  const modalBody = document.getElementById("portfolio-modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="relative h-72 sm:h-80 bg-slate-100">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
      <button class="modal-close-btn absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
        ✕
      </button>
      <div class="absolute bottom-4 left-6">
        <span class="bg-[#0b192c] text-amber-300 text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
          ${item.categoryLabel}
        </span>
      </div>
    </div>
    <div class="p-6 sm:p-8">
      <h3 class="text-2xl font-black text-[#0b192c] mb-3">${item.title}</h3>
      <p class="text-slate-600 text-sm leading-relaxed mb-6 font-medium">${item.description}</p>
      
      <div class="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs mb-6">
        <div><span class="text-slate-400 font-bold block">발주처 / 클라이언트</span><strong class="text-slate-800">${item.client}</strong></div>
        <div><span class="text-slate-400 font-bold block">공사 기간</span><strong class="text-slate-800">${item.period}</strong></div>
        <div><span class="text-slate-400 font-bold block">현장 위치</span><strong class="text-slate-800">${item.location}</strong></div>
        <div><span class="text-slate-400 font-bold block">적용 자재</span><strong class="text-emerald-700">친환경 E0 자재 & 인체무해 도료</strong></div>
      </div>

      <h4 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5">주요 공사 특징 및 공법</h4>
      <ul class="space-y-2 mb-6">
        ${item.features.map(f => `
          <li class="flex items-center gap-2 text-xs font-bold text-slate-700">
            <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            ${f}
          </li>
        `).join("")}
      </ul>

      <div class="pt-4 border-t border-slate-100 flex gap-3">
        <button onclick="closeModal('portfolio-modal'); openQuoteModal('${item.title}');" class="flex-1 py-3.5 bg-[#0b192c] hover:bg-amber-600 text-white font-bold text-sm rounded-xl transition-all shadow-md">
          이 프로젝트와 유사한 견적 문의하기
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");

  modalBody.querySelector(".modal-close-btn")?.addEventListener("click", () => {
    closeModal("portfolio-modal");
  });
}

// D. 실적 현황 (135개) 실시간 검색 및 필터링
function initTrackRecords() {
  const listEl = document.getElementById("track-record-list");
  const searchInput = document.getElementById("record-search-input");
  const countBadge = document.getElementById("record-count-badge");
  const moreBtn = document.getElementById("record-more-btn");
  const chips = document.querySelectorAll(".record-chip");

  if (!listEl) return;

  let currentCategory = "all";
  let searchQuery = "";
  let isExpanded = false;

  function filterData() {
    return TRACK_RECORDS.filter(item => {
      const matchCat = currentCategory === "all" || item.category === currentCategory || item.target === currentCategory;
      const matchSearch = !searchQuery || item.title.includes(searchQuery) || item.region.includes(searchQuery);
      return matchCat && matchSearch;
    });
  }

  function render() {
    const filtered = filterData();
    if (countBadge) countBadge.textContent = `${filtered.length}건`;

    const displayItems = isExpanded ? filtered : filtered.slice(0, 12);

    if (displayItems.length === 0) {
      listEl.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <p class="text-base font-bold mb-2">검색 결과가 없습니다.</p>
          <p class="text-xs">다른 검색어(예: 돌봄교실, 음악실, 광명, 수원 등)를 입력해 보세요.</p>
        </div>
      `;
      if (moreBtn) moreBtn.style.display = "none";
      return;
    }

    listEl.innerHTML = displayItems.map(item => `
      <div class="record-item group">
        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-black shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
            ${item.id}
          </span>
          <span class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
            ${item.title}
          </span>
        </div>
        <span class="text-[11px] font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full shrink-0 border border-slate-100 ml-2">
          ${item.region}
        </span>
      </div>
    `).join("");

    if (moreBtn) {
      if (filtered.length > 12) {
        moreBtn.style.display = "inline-flex";
        moreBtn.textContent = isExpanded ? `접기 (상위 12개만 보기)` : `전체 실적 더보기 (${filtered.length - 12}개 더 있음) ↓`;
      } else {
        moreBtn.style.display = "none";
      }
    }
  }

  render();

  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    render();
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.cat;
      render();
    });
  });

  moreBtn?.addEventListener("click", () => {
    isExpanded = !isExpanded;
    render();
  });
}

// E. 면허·등록증 실물 라이트박스
function initCertificatesLightbox() {
  const container = document.getElementById("certificates-grid");
  const modal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");

  if (!container) return;

  container.innerHTML = CERTIFICATES.map(cert => `
    <div class="cert-card" data-img="${cert.image}" data-title="${cert.title}">
      <div class="cert-thumbnail-wrapper">
        <img src="${cert.image}" alt="${cert.title}" loading="lazy">
        <div class="cert-zoom-overlay">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
          원본 확대보기
        </div>
      </div>
      <div class="mt-4">
        <span class="text-[11px] font-bold text-amber-600 block mb-1">${cert.subtitle}</span>
        <h3 class="text-base font-black text-slate-900 mb-1">${cert.title}</h3>
        <p class="text-xs text-slate-500 leading-relaxed">${cert.desc}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.dataset.img;
      const title = card.dataset.title;
      if (modal && lightboxImg) {
        lightboxImg.src = img;
        if (lightboxTitle) lightboxTitle.textContent = title;
        modal.classList.add("open");
      }
    });
  });
}

// F. 빠른 견적 상담 모달
function initQuoteModal() {
  window.openQuoteModal = function(presetCategory = "") {
    const modal = document.getElementById("quote-modal");
    if (!modal) return;
    const catSelect = document.getElementById("quote-category");
    if (catSelect && presetCategory) {
      catSelect.value = presetCategory;
    }
    modal.classList.add("open");
  };

  const modal = document.getElementById("quote-modal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal("quote-modal");
  });
}

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("open");
};

// 모든 모달 배경 클릭 시 닫기
document.querySelectorAll(".modal-backdrop").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
});

// G. 온라인 문의 폼 전송 핸들러
function initContactForm() {
  const forms = [document.getElementById("main-contact-form"), document.getElementById("modal-quote-form")];

  forms.forEach(form => {
    if (!form) return;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "전송 중입니다...";
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        // Web3Forms 실시간 전송
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            access_key: "05b5ee2e-f7a9-455a-bd50-4ff6f14b60ea",
            to_email: "opop3851963@gmail.com",
            from_name: data.name || "(주)일신아이디 웹문의",
            subject: `[(주)일신아이디 홈페이지 견적문의] ${data.name} 고객님`,
            ...data
          })
        });

        const result = await res.json();
        if (result.success) {
          alert("문의가 성공적으로 접수되었습니다! 담당자 확인 후 신속히 연락드리겠습니다.");
          form.reset();
          closeModal("quote-modal");
        } else {
          throw new Error("API failed");
        }
      } catch (err) {
        // 이메일 클라이언트 또는 전화 직접 연결 안내
        const fallback = confirm("네트워크 오류가 발생했습니다. 대표 메일(ilshin385@naver.com)로 메일을 바로 작성하시겠습니까?\n(확인을 누르시면 이메일 창이 열립니다)");
        if (fallback) {
          window.location.href = `mailto:ilshin385@naver.com?subject=견적문의&body=성함: ${data.name}%0A연락처: ${data.phone}%0A문의내용: ${data.message}`;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  });
}

// H. 스크롤 투 탑 버튼
function initScrollTop() {
  const topBtn = document.getElementById("scroll-to-top-btn");
  if (!topBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
