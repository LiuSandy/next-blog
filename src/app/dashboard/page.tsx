export default async function ExamplePage() {
  // 模拟从 API 获取数据
  const data = await fetchDataFromServer();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.message}</p>
    </div>
  );
}

// 模拟的获取数据的函数
async function fetchDataFromServer() {
  // 在实际项目中，这里可以是从数据库或其他外部 API 获取数据的逻辑
  return {
    title: 'Server Side Rendered Component',
    message: 'hello',
  };
}
