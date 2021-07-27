export const PAGE_DESCRIPTION = [
  {
    title: "top",
  },
  {
    title: "useState",
    description: [
      "state(状態)とstateを更新する関数を返すHooks。引数にはstateの初期値を与える。",
      "ButtonやInputなどのUI作成で用いられることが多い。",
    ],
  },
  {
    title: "useEffect",
    description: [
      "渡した関数をレンダーの結果が画面に反映された後に動作させるHooks。レンダーが終了した後に毎回動作する",
      "マウント時のみ動作させたい場合は、第二引数に[](空の配列)を指定する",
      "特定の値が変化したときのみ動作させたい場合は、第二引数に[特定の値](配列内に特定の値)を指定する。特定の値は複数の指定が可能。",
      "タイマーなどのコンポーネントが画面から消える場合はクリーンアップする必要がある。",
    ],
  },
  {
    title: "useContext",
    description: ["これから書く"],
  },
];
