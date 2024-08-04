# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## STEP1

- 작성한 API 문서를 기반으로 팀 내에서 지금까지 만든 API를 검토하고 통일하여 변경 사항을 반영한다.
  - 팀 내에서 일관된 기준을 정하여 API 명세를 결정한다.
  - 때로는 클라이언트의 편의를 위해 API 명세를 결정하는 것이 좋다.
  - 팀 내에 배포 될 API가 여러개 일 경우 상단 네비게이션 바에서 선택 가능하게 한다.
    - 프론트엔드의 경우 배포와 사용자가 팀 내 여러 서버 중 하나를 선택하여 서비스를 이용
      - 팀내 백엔드 엔지니어의 이름을 넣고, 이름을 선택하면 해당 엔지니어의 API로 API통신을 하게 한다.
      - 기본 선택은 제일 첫번째 이름으로 한다.

## STEP2

- 세가지 방법 중 본인이 원하는 방식으로 배포한다.
  (단, 가능하면 최대한 방법 1, 3번으로 진행하고 CI/CD를 구축하는 것을 권장해요)
  - 방법1.
    - github action을 사용하여 ci/cd를 구성한다.
    - cloudflare의 pages에 배포한다.
  - 방법2.
    - vercel을 사용하여 배포한다.
  - 방법3.
    - github pages를 사용하여 배포한다.
- 서버 API가 의도대로 잘 동작하는지 확인하고, 문제가 있다면 해결한다.

## STEP3

- 상품 구매에 사용할 수 있는 포인트 기능을 구현한다.

  - 포인트는 사용자별로 보유한다.
  - 포인트 차감 방법 등 나머지 기능에 대해서는 팀과 논의하여 정책을 결정하고 구현한다.
    - e.g.
    - 5만 원 이상 주문 시 총 금액의 10%가 할인된다.
    - 현금 영수증을 받으려면 휴대전화 번호를 입력해야 한다.
  - API 명세는 팀과 협의하여 결정하고 구현한다.
  - 관리자 화면에서 포인트를 충전할 수 있다.
