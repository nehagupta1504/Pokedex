export function Header() {
  return (
    <header
      className="App"
      style={{
        display: "flex",
        backgroundColor: "lightgray",
        justifyContent: "center",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspRLSyvHT0T3zzqsaQbEfNrEOHf6w8IJDZw&usqp=CAU"
        alt=""
        width={100}
        height={100}
        style={{ padding: 0, margin: 0 }}
      />
      <h1>My Pokedex</h1>
    </header>
  );
}
