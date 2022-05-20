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
    description: [
      "propsを利用することなく下の階層のコンポーネントとデータの共有を行うことができるHooks。",
      "コンテクストオブジェクト（React.createContext からの戻り値）を受け取り、そのコンテクストの現在値を返す。",
      "コンテクストの現在値は、ツリー内でこのHooksを呼んだコンポーネントの直近にある <MyContext.Provider> の value の値によって決定される。",
      "直近の <MyContext.Provider> が更新された場合、このHooksはその MyContext プロバイダに渡された最新の value の値を使って再レンダーを発生させる。",
      "祖先コンポーネントが React.memo や shouldComponentUpdate を使っている場合でも、useContext を使っているコンポーネント自体から再レンダーが発生する。",
    ],
  },
  {
    title: "React-Hook-Form",
    description: [
      "高性能で柔軟かつ拡張可能な使いやすいフォームバリデーションライブラリ。",
      "1からフォームを作成するよりコード量を減らせる",
      "コンポーネントの再レンダリングを分離しているため、無駄なレンダリングを抑える",
      "入力の変更を監視できる",
    ],
  },
];
