const data = [
  {
    title: 'ONERM 개인정보처리방침',
    content: [
      'ONERM의 서비스를 위해 아래와 같은 활용 목적을 가지고 사용자 개인정보를 수집합니다.',

      '1. 서비스의 기본 기능이나 특화된 기능을 제공',
      '2. 개별적 공지 필요 시',
      '3. 서비스 이용과 관련하여 문의나 분쟁의 해결',
      '4. 유료서비스 이용 시 컨텐츠 등의 전송이나 배송∙요금 정산',
      '5. 맞춤형 서비스 제공',
      '6. 인구통계학적 특성에 따른 서비스 제공',
      '7. 각종 이벤트나 광고성 정보의 제공',
      '8. 법령 등에 규정된 의무의 이행',
      '9. 법령이나 이용약관에 반하여 여러분에게 피해를 줄 수 있는 잘못된 이용행위의 방지',
    ],
  },
  {
    title: '수집하는 개인정보',
    content: [
      '1. 앱 내 채팅 기능을 사용한 채팅 내용',
      '2. 이용자 이름(닉네임)',
      '3. 사용자 이메일',
      '4. 프로필 사진',
      '5. 사진(메타정보 포함)',
      '6. 위치정보(선택적)',
      '7. 단말기 정보(OS, 화면사이즈, 디바이스 아이디), IP주소, 쿠키 정보',
      '8. 이름, 휴대폰 번호, 주소와 같은 배송정보(이벤트 물품 당첨시)',
      '9. 신용카드 정보, 통신사 정보, 상품권 번호 등 결제에 필요한 정보(유료 서비스 이용시)',
    ],
  },
  {
    title: '개인정보를 수집하는 방법',
    content: [
      '1. 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우',
      '2. 제휴 서비스 또는 단체 등으로부터 개인정보를 제공받은 경우',
      '3. 고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등온·오프라인에서 진행되는 이벤트 / 행사 등 참여',
      '4. 웹 서비스 사용 시 광고식별자(ADID / IDFA) 수집',
      '- 회사는 이용자의 ADID / IDFA를 수집할 수 있습니다.ADID / IDFA란 웹 서비스 이용자의 광고 식별 값으로, 사용자의 맞춤 서비스(콘텐츠 및 상품 등) 제공이나 더 나은 환경의 광고를 제공하기 위한 측정을 위해 수집될 수 있습니다.수집은 GA360 등의 자동 수집 툴을 통해 진행되며 개인정보를 포함하지 않습니다.',
    ],
  },
  {
    title: '서비스 이용 과정에서 이용자로부터 수집하는 개인정보',
    content: [
      'PC웹, 모바일 웹 / 앱 이용 과정에서 단말기정보(OS, 화면사이즈, 디바이스 아이디), IP주소, 쿠키, 방문일시의 정보가 자동으로 생성되어 수집될 수 있습니다.',
    ],
  },
  {
    title: '개인정보 공유 및 제공',
    content: [
      'ONERM은 사용자가 서비스 이용과정 등에서 따로 동의하는 경우나 법령에 규정된 경우를 제외하고는 사용자 개인정보를 위에서 말씀 드린 목적 범위를 초과하여 이용하거나 제3자에게 제공 또는 공유하지 않습니다.',
    ],
  },
  {
    title: '개인정보 보유기간, 파기방법 및 이용기간',
    content: [
      '사용자 개인정보는 사용자로부터 동의를 받은 수집 및 이용목적이 달성된 때에는 회사 내부 방침 또는 관계 법령에서 정한 일정한 기간 동안 보관한 다음 파기합니다.종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.ONERM가 내부 방침 또는 법령에 따라 보관하는 개인정보 및 해당 법령은 아래 표와 같습니다.',

      ' 가.회사 내부 방침에 의한 정보보유 사유',

      '- 보존 항목: 부정 이용 기록',
      '- 보존 이유: 부정 이용 방지',
      '- 보존 기간: 10년',

      ' 나.관련 법령에 의한 정보보유 사유',

      '- 보존 항목: 계약 또는 청약철회 등에 관한 기록',
      '- 근거 법령: 전자상거래 등에서의 소비자보호에 관한 법률',
      '- 보존 기간: 5년',
      '- 보존 항목: 대금결제 및 재화 등의 공급에 관한 기록',
      '- 근거 법령: 전자상거래 등에서의 소비자보호에 관한 법률',
      '- 보존 기간: 5년',
      '- 보존 항목: 소비자의 불만 또는 분쟁처리에 관한 기록',
      '- 근거 법령: 전자상거래 등에서의 소비자보호에 관한 법률',
      '- 보존 기간: 3년',
      '- 보존 항목: 표시 / 광고에 관한 기록',
      '- 근거 법령: 전자상거래 등에서의 소비자보호에 관한 법률',
      '- 보존 기간: 6개월',
      '- 보존 항목: 세법이 규정하는 모든 거래에 관한 장부 및 증빙서류',
      '- 근거 법령: 국세기본법',
      '- 보존 기간: 5년',
      '- 보존 항목: 전자금융 거래에 관한 기록',
      '- 근거 법령: 전자금융거래법',
      '- 보존 기간: 5년',
      '- 보존 항목: 서비스 방문기록',
      '- 근거 법령: 통신비밀보호법',
      '- 보존 기간: 3개월',
    ],
  },
  {
    title: '개인정보 문의처',
    content: [
      '사용자가 서비스를 이용하면서 발생하는 모든 개인정보보호 관련 문의, 불만, 조언이나 기타 사항은 개인정보 보호책임자 및 담당부서로 연락해 주시기 바랍니다.ONERM는 사용자 목소리에 귀기울이고 신속하고 충분한 답변을 드릴 수 있도록 최선을 다하겠습니다.',
    ],
  },
  {
    title: '개인정보 보호책임자',
    content: ['- 이름 : 오징어'],
  },
  {
    title: '고지의 의무',
    content: [
      'ONERM은 법률이나 서비스의 변경사항을 반영하기 위한 목적 등으로 개인정보처리방침을 수정할 수 있습니다.개인정보처리방침이 변경되는 경우 ONERM은 변경 사항을 게시하며, 변경된 개인정보처리방침은 게시한 날로부터 7일 후부터 효력이 발생합니다.',
      '- 공고일자: 2023년 04월 07일',
      '- 시행일자: 2023년 04월 08일',
      'ONERM의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못 하시거나 보다 자세한 도움이 필요하시면 아래의 기관으로 문의하여 주시기 바랍니다.',
      '▶ 개인정보 침해신고센터(한국인터넷진흥원)',
      '- 소관업무 : 개인정보 침해 사실 신고, 상담 신청',
      '- 홈페이지 : ',
      '- 전화 : (국번없이) 118',
      '- 주소 : (138 - 950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터',
      '▶ 개인정보 분쟁조정위원회(국가정보자원관리원)',
      '- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정(민사적 해결)',
      '- 홈페이지 : ',
      '- 전화 : 1833-6972',
      '- 주소 : (138 - 950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터',
      '▶ 대검찰청 사이버수사과 ',
      '- 홈페이지 : ',
      '- 전화 : (국번없이) 1301',
      '▶ 경찰청 사이버안전국 ',
      '- 홈페이지 : ',
      '- 전화 : (국번없이) 182 ',
    ],
  },
];

const appElement = document.getElementById('app');
data.forEach(function (a, i) {
  const titleElement = document.createElement('div');
  titleElement.className = 'privacy_policy_title';
  titleElement.textContent = a.title;
  appElement.appendChild(titleElement);

  Object.values(a.content).forEach(function (b, c) {
    const contentElement = document.createElement('div');
    contentElement.className = 'privacy_policy_content';
    contentElement.textContent = b;

    if (i === data.length - 1) {
      if (c === 6) {
        const linkElement = document.createElement('a');
        linkElement.className = 'privacy_policy_link';
        linkElement.href = 'https://privacy.kisa.or.kr/main.do';
        linkElement.target = '_blank';
        linkElement.textContent = 'privacy.kisa.or.kr';
        contentElement.appendChild(linkElement);
      } else if (c === 11) {
        const linkElement = document.createElement('a');
        linkElement.className = 'privacy_policy_link';
        linkElement.href = 'https://www.kopico.go.kr/';
        linkElement.target = '_blank';
        linkElement.textContent = 'www.kopico.go.kr';
        contentElement.appendChild(linkElement);
      } else if (c === 15) {
        const linkElement = document.createElement('a');
        linkElement.className = 'privacy_policy_link';
        linkElement.href = 'https://spo.go.kr/site/spo/main.do';
        linkElement.target = '_blank';
        linkElement.textContent = 'spo.go.kr';
        contentElement.appendChild(linkElement);
      } else if (c === 18) {
        const linkElement = document.createElement('a');
        linkElement.className = 'privacy_policy_link';
        linkElement.href = 'https://ecrm.police.go.kr/minwon/main';
        linkElement.target = '_blank';
        linkElement.textContent = 'cyberbureau.police.go.kr';
        contentElement.appendChild(linkElement);
      }
    }

    appElement.appendChild(contentElement);
  });
});
