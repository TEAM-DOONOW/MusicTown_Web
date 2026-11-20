import type { Release } from "../types/content";
export const releases: Release[] = [
  {
    version: "v0.2.0",
    date: "2026-11-14",
    title: "좋아하는 순간을, 오래 간직해요",
    summary:
      "내 공연 녹음부터 더 생생해진 공원까지. 조금 더 다정해진 뮤직타운을 만나보세요.",
    changes: [
      "본인 공연을 녹음하고 파일로 내려받을 수 있어요.",
      "동물 주민의 걷기, 표정, 착석과 커피 마시는 동작을 개선했어요.",
      "캐릭터 옷과 장신구, 프로필과 공연 화면을 다듬었어요.",
      "분수와 발걸음 효과음을 추가하고 배경음과 마이크 모니터링을 개선했어요.",
    ],
    url: "https://github.com/TEAM-DOONOW/MusicTown/releases/tag/v0.2.0",
  },
  {
    version: "v0.1.0",
    date: "2026-11-13",
    title: "음악이 흐르는 공원에 어서 오세요",
    summary:
      "PC 키보드 이동, 공원 주민과 아바타, 무대와 랭킹 등 첫 공개 릴리즈 소식을 전해요.",
    changes: [
      "PC 접속과 키보드 이동을 지원해요.",
      "무대 음성 모니터링과 공연 UI를 개선했어요.",
      "공원 주민, 아바타, 꽃밭과 분수를 확장했어요.",
      "누적·주간 하트 랭킹과 팔로워 화면을 추가하고 다듬었어요.",
    ],
    url: "https://github.com/TEAM-DOONOW/MusicTown/releases/tag/v0.1.0",
  },
];
