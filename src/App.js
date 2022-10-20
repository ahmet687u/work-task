import News from "./components/news/News";
import Todo from "./components/todo/Todo";
import Wheather from "./components/wheather/Wheather";

export default function App() {
  return (
    <main className="gr_container page txt-default">
      <div className="gr_row">
        {/* Todo section */}
        <div className="gr-7-10-md  gr-6-10-sm">
          <Todo />
        </div>

        {/* Main section */}
        <div className="gr-5-10-md  gr-6-10-sm">
          {/* Wheather section */}
          <Wheather />

          {/* News section */}
          <News />
        </div>
      </div>
    </main>
  );
}
