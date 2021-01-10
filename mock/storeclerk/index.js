export const dataTree = {
  cateId: "1",
  cateName: "爱心人寿",
  members: [
    {
      memId: "001",
      memName: "张延苓"
    }
  ],
  children: [
    {
      cateId: "1-1",
      cateName: "市场部",
      members: [
        {
          memId: "002",
          memName: "大佬002"
        },
        {
          memId: "003",
          memName: "重名测试"
        }
      ],
      children: [
        {
          cateId: "1-1-1",
          cateName: "市场部一分部",
          members: [
            {
              memId: "101",
              memName: "小弟101"
            },
            {
              memId: "102",
              memName: "重名测试"
            },
            {
              memId: "103",
              memName: "重名测试"
            }
          ]
        },
        {
          cateId: "1-1-2",
          cateName: "市场部二分部",
          members: [
            {
              memId: "121",
              memName: "小弟121"
            },
            {
              memId: "122",
              memName: "重名测试"
            },
            {
              memId: "123",
              memName: "重名测试"
            }
          ]
        },
        {
          cateId: "1-1-3",
          cateName: "市场部三分部",
          members: [
            {
              memId: "131",
              memName: "小弟123"
            },
            {
              memId: "132",
              memName: "重名测试"
            },
            {
              memId: "133",
              memName: "重名测试"
            }
          ]
        }
      ]
    },
    {
      cateId: "1-2",
      cateName: "销售部",
      members: [
        {
          memId: "003",
          memName: "重名测试"
        },
        {
          memId: "004",
          memName: "大佬003"
        }
      ],
      children: [
        {
          cateId: "1-2-1",
          cateName: "市场部一分部",
          members: [
            {
              memId: "201",
              memName: "小弟101"
            },
            {
              memId: "202",
              memName: "重名测试"
            },
            {
              memId: "203",
              memName: "重名测试"
            }
          ]
        }
      ]
    }
  ]
};
