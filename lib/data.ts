export type TipCategory =
  | "memorization"
  | "focus"
  | "exam-prep"
  | "note-taking"
  | "time-management"
  | "procrastination"
  | "routine"
  | "tools";

export type TipDifficulty = "beginner" | "intermediate" | "advanced";

export interface Tip {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: TipCategory;
  type: "study" | "productivity";
  difficulty: TipDifficulty;
  duration: string;
  views: number;
  saves: number;
  checklist: string[];
  relatedTipIds: string[];
  createdAt: string;
}

export const categoryLabels: Record<TipCategory, string> = {
  memorization: "암기",
  focus: "집중력",
  "exam-prep": "시험 대비",
  "note-taking": "노트 정리",
  "time-management": "시간 관리",
  procrastination: "미루기 극복",
  routine: "루틴",
  tools: "도구 추천",
};

export const difficultyLabels: Record<TipDifficulty, string> = {
  beginner: "초급",
  intermediate: "중급",
  advanced: "고급",
};

export const studyTips: Tip[] = [
  {
    id: "study-1",
    title: "능동적 회상(Active Recall)으로 암기력 2배 높이기",
    summary:
      "단순 반복 읽기 대신, 스스로 질문하고 답을 떠올리는 방식으로 기억을 강화하세요.",
    content: `능동적 회상은 정보를 단순히 읽는 대신, 스스로 기억해내는 과정을 통해 장기 기억으로 전환하는 학습법입니다.

**왜 효과적인가요?**
뇌는 정보를 꺼내는 과정에서 신경 연결을 강화합니다. 단순히 읽기만 하면 "알고 있다"는 착각이 생기지만, 직접 떠올리면 실제 이해도를 확인할 수 있습니다.

**오늘 바로 해볼 행동:**
교재를 읽은 후, 책을 덮고 핵심 내용 3가지를 손으로 써보세요. 떠오르지 않는 부분이 바로 복습이 필요한 부분입니다.`,
    category: "memorization",
    type: "study",
    difficulty: "beginner",
    duration: "5분",
    views: 2450,
    saves: 380,
    checklist: [
      "오늘 공부한 내용의 핵심 질문 3개 만들기",
      "책을 덮고 질문에 답해보기",
      "틀린 부분 체크하고 다시 복습하기",
    ],
    relatedTipIds: ["study-2", "study-3"],
    createdAt: "2026-01-15",
  },
  {
    id: "study-2",
    title: "간격 반복법으로 시험 전날 벼락치기 탈출하기",
    summary:
      "1일, 3일, 7일, 14일 간격으로 복습하면 장기 기억에 훨씬 효과적입니다.",
    content: `간격 반복법(Spaced Repetition)은 망각 곡선을 이용해 최적의 타이밍에 복습하는 학습법입니다.

**왜 효과적인가요?**
에빙하우스의 망각 곡선에 따르면, 학습 후 24시간 내에 70%를 잊어버립니다. 하지만 적절한 간격으로 복습하면 기억 유지율이 90% 이상으로 올라갑니다.

**오늘 바로 해볼 행동:**
오늘 배운 내용을 내일, 3일 후, 1주 후에 복습하도록 캘린더에 알림을 설정하세요.`,
    category: "memorization",
    type: "study",
    difficulty: "intermediate",
    duration: "10분",
    views: 3120,
    saves: 520,
    checklist: [
      "오늘 배운 핵심 개념 정리하기",
      "복습 일정 캘린더에 등록하기 (1일, 3일, 7일)",
      "첫 번째 복습 완료하기",
    ],
    relatedTipIds: ["study-1", "study-4"],
    createdAt: "2026-01-20",
  },
  {
    id: "study-3",
    title: "포모도로 테크닉으로 집중력 극대화하기",
    summary:
      "25분 집중 + 5분 휴식 사이클로 지치지 않고 오래 공부할 수 있습니다.",
    content: `포모도로 테크닉은 시간을 짧은 단위로 쪼개어 집중력을 유지하는 시간 관리 기법입니다.

**왜 효과적인가요?**
인간의 집중력은 약 25분이 최적입니다. 짧은 집중과 휴식을 반복하면 뇌의 피로를 최소화하고 생산성을 높일 수 있습니다.

**오늘 바로 해볼 행동:**
타이머를 25분으로 설정하고, 한 가지 과목만 집중해보세요. 타이머가 울리면 반드시 5분 쉬세요.`,
    category: "focus",
    type: "study",
    difficulty: "beginner",
    duration: "30분",
    views: 4200,
    saves: 680,
    checklist: [
      "타이머 25분 설정하기",
      "한 가지 과목만 집중하기",
      "5분 휴식 (자리에서 일어나기)",
      "4세트 완료하기",
    ],
    relatedTipIds: ["study-5", "prod-1"],
    createdAt: "2026-01-25",
  },
  {
    id: "study-4",
    title: "코넬 노트 정리법으로 수업 효율 높이기",
    summary:
      "노트를 세 구역으로 나누어 핵심 키워드, 상세 내용, 요약을 한눈에 정리하세요.",
    content: `코넬 노트 정리법은 1950년대 코넬 대학교에서 개발된 노트 필기 체계입니다.

**왜 효과적인가요?**
노트를 구조화하면 복습할 때 핵심만 빠르게 찾을 수 있고, 요약을 작성하는 과정에서 이해도가 깊어집니다.

**오늘 바로 해볼 행동:**
노트 한 페이지를 세로로 3:7 비율로 나누고, 왼쪽에 키워드, 오른쪽에 내용을 적어보세요.`,
    category: "note-taking",
    type: "study",
    difficulty: "beginner",
    duration: "15분",
    views: 1890,
    saves: 310,
    checklist: [
      "노트 페이지를 3:7 비율로 나누기",
      "수업 중 오른쪽에 필기하기",
      "수업 후 왼쪽에 키워드 정리하기",
      "하단에 3줄 요약 작성하기",
    ],
    relatedTipIds: ["study-1", "study-6"],
    createdAt: "2026-02-01",
  },
  {
    id: "study-5",
    title: "환경 설계로 집중력 자동 부스트",
    summary:
      "공부 공간을 의도적으로 설계하면 별도의 의지력 없이도 집중할 수 있습니다.",
    content: `환경이 행동을 결정합니다. 공부 공간을 최적화하면 자연스럽게 집중 모드에 진입할 수 있습니다.

**왜 효과적인가요?**
뇌는 환경과 행동을 연결합니다. 특정 장소에서 항상 공부하면, 그 장소에 앉는 것만으로 집중 모드가 활성화됩니다.

**오늘 바로 해볼 행동:**
책상 위에 공부에 필요한 것만 남기고 모든 것을 치워보세요. 스마트폰은 다른 방에 두세요.`,
    category: "focus",
    type: "study",
    difficulty: "beginner",
    duration: "10분",
    views: 2780,
    saves: 445,
    checklist: [
      "책상 위 불필요한 물건 치우기",
      "스마트폰 다른 방에 두기",
      "필요한 교재만 꺼내기",
      "30분 이상 집중하기",
    ],
    relatedTipIds: ["study-3", "prod-2"],
    createdAt: "2026-02-05",
  },
  {
    id: "study-6",
    title: "기출문제 역분석법으로 시험 패턴 파악하기",
    summary:
      "기출문제를 풀기만 하지 말고, 출제자의 의도를 분석하면 예측력이 높아집니다.",
    content: `기출문제 역분석은 문제를 풀고 나서 "왜 이 문제가 출제되었는가"를 분석하는 방법입니다.

**왜 효과적인가요?**
시험은 패턴이 있습니다. 출제자는 특정 개념을 반복해서 물어보며, 함정도 비슷한 구조로 만듭니다.

**오늘 바로 해볼 행동:**
최근 3개년 기출문제에서 가장 자주 나오는 주제 5개를 표시해보세요.`,
    category: "exam-prep",
    type: "study",
    difficulty: "advanced",
    duration: "45분",
    views: 3560,
    saves: 590,
    checklist: [
      "기출문제 3개년치 모으기",
      "문제별 출제 주제 분류하기",
      "자주 나오는 주제 TOP 5 정리하기",
      "약점 주제 집중 복습 계획 세우기",
    ],
    relatedTipIds: ["study-2", "study-4"],
    createdAt: "2026-02-08",
  },
];

export const productivityTips: Tip[] = [
  {
    id: "prod-1",
    title: "2분 규칙으로 미루기 습관 끊기",
    summary:
      "2분 안에 할 수 있는 일은 지금 바로 하세요. 작은 실행이 모멘텀을 만듭니다.",
    content: `2분 규칙은 데이비드 앨런의 GTD(Getting Things Done) 방법론의 핵심 원칙입니다.

**왜 효과적인가요?**
미루기의 가장 큰 원인은 "시작의 저항감"입니다. 2분이라는 짧은 시간은 저항감을 없애고, 시작하면 자연스럽게 계속하게 됩니다.

**오늘 바로 해볼 행동:**
지금 미루고 있는 일 중 2분 안에 시작할 수 있는 것을 하나 골라서 바로 해보세요.`,
    category: "procrastination",
    type: "productivity",
    difficulty: "beginner",
    duration: "2분",
    views: 5200,
    saves: 890,
    checklist: [
      "미루고 있는 일 3가지 적기",
      "2분 안에 시작할 수 있는 것 고르기",
      "바로 실행하기",
      "완료 체크하기",
    ],
    relatedTipIds: ["prod-2", "prod-3"],
    createdAt: "2026-01-18",
  },
  {
    id: "prod-2",
    title: "아침 루틴 설계로 하루를 지배하기",
    summary:
      "기상 후 1시간이 하루의 생산성을 결정합니다. 간단한 루틴부터 시작하세요.",
    content: `아침 루틴은 하루의 나머지 시간에 대한 투자입니다. 의지력이 가장 높은 아침에 중요한 습관을 배치하세요.

**왜 효과적인가요?**
아침에는 의지력(willpower)이 가장 충만합니다. 이 시간에 중요한 일을 처리하면 하루 전체의 생산성이 올라갑니다.

**오늘 바로 해볼 행동:**
내일 아침에 할 간단한 루틴 3가지를 지금 정해보세요 (예: 물 한 잔, 스트레칭, 10분 독서).`,
    category: "routine",
    type: "productivity",
    difficulty: "beginner",
    duration: "30분",
    views: 3800,
    saves: 620,
    checklist: [
      "기상 시간 정하기",
      "아침 루틴 3가지 결정하기",
      "알람 설정하기",
      "내일 아침 실행하기",
    ],
    relatedTipIds: ["prod-1", "prod-4"],
    createdAt: "2026-01-22",
  },
  {
    id: "prod-3",
    title: "시간 블록킹으로 하루 계획 완벽 세우기",
    summary:
      "할 일 목록 대신, 캘린더에 시간을 블록으로 배정하면 실행력이 올라갑니다.",
    content: `시간 ��록킹(Time Blocking)은 할 일을 목록으로 나열하는 대신, 구체적인 시간대에 배정하는 방법입니다.

**왜 효과적인가요?**
할 일 목록은 "무엇"만 알려주지만, 시간 블록킹은 "언제"까지 정해줍니다. 이것이 실행의 차이를 만듭니다.

**오늘 바로 해볼 행동:**
내일 할 일 3가지를 구체적인 시간대에 배정해보세요 (예: 9:00~10:30 수학 문제풀이).`,
    category: "time-management",
    type: "productivity",
    difficulty: "intermediate",
    duration: "15분",
    views: 2900,
    saves: 470,
    checklist: [
      "내일 해야 할 일 3가지 적기",
      "각 일에 필요한 시간 예측하기",
      "캘린더에 시간 블록 배정하기",
      "블록 사이에 여유 시간 두기",
    ],
    relatedTipIds: ["prod-1", "prod-2"],
    createdAt: "2026-01-28",
  },
  {
    id: "prod-4",
    title: "디지털 디톡스로 깊은 집중 되찾기",
    summary:
      "알림을 끄고 SNS 시간을 제한하면 하루에 2시간을 되찾을 수 있습니다.",
    content: `스마트폰 알림 하나가 집중을 깨뜨리면, 원래 집중 상태로 돌아오는 데 평균 23분이 걸립니다.

**왜 효과적인가요?**
주의력은 유한한 자원입니다. 불필요한 알림과 SNS가 이 자원을 고갈시킵니다.

**오늘 바로 해볼 행동:**
스마트폰의 불필요한 알림을 5개 이상 끄고, SNS 앱의 일일 사용 시간 제한을 설정하세요.`,
    category: "tools",
    type: "productivity",
    difficulty: "beginner",
    duration: "10분",
    views: 4100,
    saves: 710,
    checklist: [
      "불필요한 앱 알림 5개 이상 끄기",
      "SNS 앱 일일 사용 시간 제한 설정하기",
      "공부 시간에는 방해 금지 모드 켜기",
      "일주일 후 변화 체크하기",
    ],
    relatedTipIds: ["prod-3", "study-5"],
    createdAt: "2026-02-03",
  },
  {
    id: "prod-5",
    title: "주간 리뷰로 생산성 피드백 루프 만들기",
    summary:
      "매주 일요일 30분, 한 주를 돌아보고 다음 주를 계획하면 성장 속도가 달라집니다.",
    content: `주간 리뷰는 한 주의 성과를 정리하고 다음 주의 방향을 설정하는 습관입니다.

**왜 효과적인가요?**
실행만 하고 되돌아보지 않으면 같은 실수를 반복합니다. 주간 리뷰는 자기 인식을 높이고, 점진적 개선을 가능하게 합니다.

**오늘 바로 해볼 행동:**
이번 주에 잘한 것 3가지와 개선할 것 1가지를 적어보세요.`,
    category: "routine",
    type: "productivity",
    difficulty: "intermediate",
    duration: "30분",
    views: 2100,
    saves: 350,
    checklist: [
      "이번 주 잘한 것 3가지 적기",
      "개선할 점 1가지 적기",
      "다음 주 핵심 목표 3가지 설정하기",
      "일요일 저녁 리뷰 알림 설정하기",
    ],
    relatedTipIds: ["prod-2", "prod-3"],
    createdAt: "2026-02-07",
  },
];

export const allTips = [...studyTips, ...productivityTips];

export function getTipById(id: string): Tip | undefined {
  return allTips.find((tip) => tip.id === id);
}

export function getRelatedTips(tip: Tip): Tip[] {
  return tip.relatedTipIds
    .map((id) => getTipById(id))
    .filter((t): t is Tip => t !== undefined);
}

export function getPopularTips(count: number = 4): Tip[] {
  return [...allTips].sort((a, b) => b.views - a.views).slice(0, count);
}

export function getDailyStudyTip(): Tip {
  const day = new Date().getDate();
  return studyTips[day % studyTips.length];
}

export function getDailyProductivityTip(): Tip {
  const day = new Date().getDate();
  return productivityTips[day % productivityTips.length];
}
