export default function () {
  return {
    real_break_time: 0,
    break_timer: "",
    timer: "",
    sec: 0,
    time: ["0", "00", "00"],
    routine: [
      { _id: "640a6c375fce98868ae59097", name: "routine", title: "3분할" },
      { _id: "640a7b6f20a13075314a2fbe", name: "routine", title: "5분할" },
    ],
    division: [
      {
        _id: "640a6ce25fce98868ae59098",
        id: "640a6c375fce98868ae59097",
        title: "가슴",
      },
      {
        _id: "640a7b5420a13075314a2fbc",
        id: "640a6c375fce98868ae59097",
        title: "등",
      },
      {
        _id: "640a7b5920a13075314a2fbd",
        id: "640a6c375fce98868ae59097",
        title: "하체",
      },
    ],
    list: [
      {
        _id: "이상해씨",
        title: "바벨 플랫 벤치 프레스",
        division: "가슴, 삼두",
        equipment: "바벨",
      },
      {
        _id: "이상해",
        title: "바벨 인클라인 벤치 프레스",
        division: "가슴, 삼두",
        equipment: "바벨",
      },
      {
        _id: "파이리",
        title: "핀 로드 플랫 체스트 프레스",
        division: "가슴, 삼두",
        equipment: "핀 로드",
      },
      {
        _id: "피카츄",
        title: "플레이트 로드 플랫 체스트 프레스",
        division: "가슴, 삼두",
        equipment: "플레이트 로드",
      },
      {
        _id: "치",
        title: "플레이트 로드 인클라인 체스트 프레스",
        division: "가슴, 삼두",
        equipment: "플레이트 로드",
      },
      {
        _id: "리자몽",
        title: "케이블 크로스오버 플라이",
        division: "가슴, 어깨",
        equipment: "케이블",
      },
      {
        _id: "메타몽",
        title: "덤벨 사이드 레터럴 레이즈",
        division: "어깨",
        equipment: "덤벨",
      },
      {
        _id: "똥",
        title: "케이블 랫 풀 다운",
        division: "등",
        equipment: "케이블",
      },
    ],
    mylist: [
      {
        _id: "이상해씨",
        list_id: "이상해씨",
        id: "640a6ce25fce98868ae59098",
        title: "바벨 플랫 벤치 프레스",
        division: "가슴, 삼두",
      },
      {
        _id: "파이리",
        list_id: "파이리",
        id: "640a6ce25fce98868ae59098",
        title: "핀 로드 플랫 체스트 프레스",
        division: "가슴, 삼두",
      },
      {
        _id: "이상해씨",
        list_id: "이상해씨",
        id: "640a7b5420a13075314a2fbc",
        title: "바벨 플랫 벤치 프레스",
        division: "가슴, 삼두",
      },
    ],
    record: [
      {
        name: "이상해씨",
        record: [
          {
            kg: 30,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
          {
            kg: 30,
            rep: 20,
            break_time: 50,
            performance_time: "",
            check: false,
          },
          {
            kg: 30,
            rep: 20,
            break_time: 40,
            performance_time: "",
            check: false,
          },
        ],
      },
      {
        name: "파이리",
        record: [
          {
            kg: 40,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
          {
            kg: 40,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
          {
            kg: 40,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
        ],
      },
    ],
    exrecord: [
      {
        name: "이상해씨",
        record: [
          {
            kg: 30,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
          {
            kg: 30,
            rep: 20,
            break_time: 50,
            performance_time: "",
            check: false,
          },
          {
            kg: 30,
            rep: 20,
            break_time: 40,
            performance_time: "",
            check: false,
          },
          {
            kg: 30,
            rep: 20,
            break_time: 30,
            performance_time: "",
            check: false,
          },
        ],
      },
      {
        name: "파이리",
        record: [
          {
            kg: 40,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
          {
            kg: 40,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
          {
            kg: 40,
            rep: 20,
            break_time: 60,
            performance_time: "",
            check: false,
          },
        ],
      },
    ],
    memo: [
      {
        memo: "이상해씨",
        contents: [
          { title: "랙", content: "10번" },
          { title: "안전바", content: "2번" },
        ],
      },
      {
        memo: "파이리",
        contents: [
          { title: "의자", content: "8번" },
          { title: "핀", content: "1번" },
        ],
      },
    ],
  };
}
