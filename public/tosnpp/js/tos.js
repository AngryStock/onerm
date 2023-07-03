const data = [
  {
    title: 'ONERM 이용약관',
    content: [
      'ONERM 서비스를 이용해 주셔서 감사합니다. ONERM 서비스의 이용약관을 확인하시고 즐거운 서비스 이용이 되시기 바랍니다. 해당 이용약관에서 "회사"란 "ONERM" 서비스를 제공하는 ONERM를 말합니다.',
    ],
  },
  {
    title: '사용시 주의점',
    content: [
      'ONERM은 사용자가 아래와 같이 잘못된 방법이나 행위로 서비스를 이용할 경우 사용에 대한 제재(이용정지, 강제탈퇴 등)를 사전 예고 없이 진행할 수 있습니다.',
      '1. ONERM의 정보를 기반으로 다른 사용자의 정보를 무단으로 수집, 이용하거나 다른 사람들에게 제공하는 행위',
      '2. 음란 정보나 저작권 침해 정보 등 공서양속 및 법령에 위반되는 내용의 정보 등을 발송하거나 게시하는 행위',
      '3. ONERM 서비스를 영리나 홍보 목적으로 이용하는 행위',
      '4. 회사의 동의 없이 회사의 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위',
      '5. 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 ONERM 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위',
      '6. 관련 법령, ONERM의 모든 약관 또는 정책을 준수하지 않는 행위',
    ],
  },
  {
    title: '개인정보 보호 관련',
    content: [
      '개인정보는 ONERM 서비스의 원활한 제공을 위하여 사용자가 동의한 목적과 범위 내에서만 이용됩니다.개인정보 보호 관련 기타 상세한 사항은 ONERM 개인정보처리방침 을 참고하시기 바랍니다.',
    ],
  },
  {
    title: '게시물의 저작권 보호',
    content: [
      '1. ONERM 서비스 사용자가 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.',
      '2. 사용자가 서비스 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션, 광고 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다.이 경우, 회사는 저작권법 규정을 준수하며, 사용자는 언제든지 고객센터 또는 운영자 문의 기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 요청할 수 있습니다.',
      '3. 위 2항 이외의 방법으로 사용자의 게시물을 이용하고자 하는 경우에는 회사는 전화, 팩스, 전자우편 등을 통해 사전에 사용자의 동의를 얻어야 합니다.',
    ],
  },
  {
    title: '게시물의 관리',
    content: [
      '1. 사용자의 게시물이 "정보통신망법" 및 "저작권법"등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련법에 따라 조치를 취하여야 합니다.',
      '2. ONERM은 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치(삭제, 노출제한, 게시중단) 등을 취할 수 있습니다.',
    ],
  },
  {
    title: '서비스 고지 및 홍보내용 표시',
    content: [
      'ONERM에서는 서비스 이용자들의 편의를 위해 서비스 이용과 관련된 고지 및 홍보를 포함한 정보를 ONERM 서비스 안에 표시하거나 사용자의 휴대푠에 푸쉬 알람을 보낼수 있습니다.',
    ],
  },
  {
    title: '정보의 제공과 광고 게재',
    content: [
      'ONERM에서는 서비스 이용자들이 서비스 이용중 필요하다고 생각되는 다양한 정보를 공지사항, 전자우편 푸쉬 등으로 보낼 수 있습니다.',
    ],
  },
  {
    title: '서비스 중단',
    content: [
      'ONERM 서비스는 장비의 유지∙보수를 위한 정기 또는 임시 점검 또는 다른 상당한 이유로 서비스의 제공이 일시 중단될 수 있으며, 이때에는 미리 서비스 제공화면에 공지하도록 하겠습니다.만약, 알 수 없는 이유로 서비스 이용에 문제가 발생할시 빠르게 공지하도록 하겠습니다.',
    ],
  },
  {
    title: '서비스 변경',
    content: [
      'ONERM 서비스는 상당한 이유가 있는 경우 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.이때에는 미리 서비스 제공화면, 전자메일 등으로 공지하도록 하겠습니다.',
      '또한 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요 상 수정, 중단, 변경할 수 있으며 이에 대한 관련법에 특별한 규정이 없는 한 별도의 보상을 제공하지는 않습니다.',
    ],
  },
  {
    title: '이용계약 해지(서비스 탈퇴)',
    content: [
      '사용자가 ONERM 서비스의 이용을 더 이상 원치 않는 때에는 언제든지 서비스 내 제공되는 메뉴를 이용하여 서비스 이용계약의 해지 신청을 할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리합니다.',
      '이용계약이 해지되면 법령 및 개인정보처리방침에 따라 사용자 정보를 보유하는 경우를 제외하고는 사용자 정보나 사용자가 작성한 게시물 등 모든 데이터는 삭제됩니다.다만, 사용자가 작성한 게시물이 제3자에 의하여 스크랩 또는 다른 공유 기능으로 게시되거나, 사용자가 제3자의 게시물에 댓글, 채팅 등 게시물을 추가하는 등의 경우에는 다른 이용자의 정상적 서비스 이용을 위하여 필요한 범위 내에서 삭제 되지 않을 수 있습니다.',
    ],
  },
  {
    title: '책임제한',
    content: [
      '회사는 법령상 허용되는 한도 내에서 ONERM 서비스와 관련하여 본 약관에 명시되지 않은 어떠한 구체적인 사항에 대한 약정이나 보증을 하지 않습니다.예를 들어, 사용자는 ONERM의 서비스를 통해 운동을 할수 있고, 이에 대해 발생할 수 있는 사용자의 부상이나 상태 이상에 대해서 ONERM 서비스가 보증을 하는 것이 아닙니다.',
    ],
  },
  {
    title: '손해배상',
    content: [
      '회사의 과실로 인하여 사용자가 손해를 입게 될 경우 법령에 따라 사용자의 손해를 배상하도록 합니다.단, 제3자가 불법적으로 ONERM의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해, 제3자가 ONERM의 서버에 대한 전송 또는 ONERM 서버로부터의 전송을 방해함으로써 발생하는 손해, 제3자가 악성 프로그램을 전송 또는 유포함으로써 발생하는 손해, 전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해, 명예훼손 등 제3자가 ONERM 서비스를 이용하는 과정에서 사용자에게 발생시킨 손해에 대하여 책임을 부담하지 않습니다.',
    ],
  },
  {
    title: '약관수정',
    content: [
      '회사는 법률이나 ONERM 서비스의 변경사항을 반영하기 위한 목적 등으로 본 약관이나 각 ONERM 서비스 고객센터의 ONERM 서비스 이용방법, 해당 안내 및 고지사항을 수정할 수 있습니다.본 약관이 변경되는 경우 회사는 변경 사항을 ONERM 서비스 홈페이지에 게시하며, 변경된 약관은 게시한 날로부터 7일 후부터 효력이 발생합니다.',
      '회사는 변경된 약관을 게시한 날로부터 효력이 발생되는 날까지 약관변경에 대한 사용자의 의견을 기다립니다.위 기간이 지나도록 사용자의 의견이 접수되지 않으면, 사용자가 변경된 약관에 따라 서비스를 이용하는 데에 동의하는 것으로 판단합니다. ',
      '사용자가 변경된 약관에 동의하지 않는 경우 변경된 약관의 적용을 받는 ONERM 서비스의 제공이 더 이상 불가능할 수 있습니다.',
    ],
  },
  {
    title: '사용자 의견',
    content: [
      '사용자는 언제든지 서비스 내 ONERM 문의란을 통해 의견을 개진할 수 있습니다. ONERM의 사용자 전체에 대한 통지는 ONERM 서비스 초기화면 또는 공지사항란에 게시함으로써 효력이 발생합니다.',
      '본 약관은 회사와 사용자와의 관계에 적용되며, 제3자의 수익권을 발생시키지 않습니다.',
      '사용자가 본 약관을 준수하지 않은 경우에, 회사가 즉시 조치를 취하지 않더라도 회사가 가지고 있는 권리를 포기하는 것이 아니며, 본 약관 중 일부 조항의 집행이 불가능하게 되더라도 다른 조항에는 영향을 미치지 않습니다.',
      '본 약관 또는 서비스와 관련하여서는 대한민국의 법률이 적용됩니다.',
    ],
  },
  {
    title: ' ',
    content: ['- 공고일자: 2024년 04월 07일', '- 시행일자: 2024년 04월 08일'],
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
