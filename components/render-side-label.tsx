export default function RenderSideLabel() {
  return (
    <div suppressHydrationWarning className="description">
      {typeof window === 'undefined'
        ? 'サーバでレンダリング'
        : 'ブラウザでレンダリング'}
    </div>
  )
}
