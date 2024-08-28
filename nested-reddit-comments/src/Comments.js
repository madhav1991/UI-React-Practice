import './App.css';
import CommentBox from './CommentBox';

function App() {
  const data= [
    {
      userName: "Madhav Peri",
      comment: "This is a a sample comment",
      replies:[
        {
          userName: "Lasya Bhaskara",
          comment: "I am a lead business analyst",
          replies:[
            {
              userName: "Sahaana B Peri",
              comment: "I am the cutest person ever",
            }
          ]
        }
      ]
    },
    {
      userName: "Warren Buffet",
      comment: "This is a a sample comment"
    },
    {
      userName: "Venkateswara Rao Peri",
      comment: "Jai Shri Ram",
      replies:[
        {
          userName: "Uma Devi",
          comment: "Om Durga devi",
        }
      ]
    }
  ];
  return (
    <div className="App">
      <CommentBox data={data}/>
    </div>
  );
}

export default App;
