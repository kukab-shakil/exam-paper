import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getQuestion } from "../question/fakeQuestion";
import Mcqs from "./mcqs";
import Essay from "./essay";
import Fib from "./fIBlanks";
import Submit from "./submit";
import MatchColumn from "./matchColumn";
import UploadFile from "./uploadFile";

<uploadFile/>

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
  },
}));

function QuestionLists() {
  const classes = useStyles();
  const data = getQuestion();

  const renderQuestionData = (data) => {
    return data.map((q, index) => {
      if (q.type === "mcq") {
        return (
          <Mcqs
            key={index}
            id={q._id}
            title={q.title}
            options={q.data.options}
          />
        );
      } else if (q.type === "Essay") {
        return (
          <Essay key={index} id={q._id} title={q.title} textArea={q.textArea} />
        );
      } else if (q.type === "f/b") {
        return (
          <Fib
            key={index}
            id={q._id}
            title={q.title}
            noOfBlanks={q.noOfBlanks}
          />
        );
      } else if (q.type === "match") {
        return (
          <MatchColumn
            key={index}
            id={q._id}
            title={q.title}
            options={q.data.options}
            match={q.match.options}
          />
        );
      } else if (q.type === "file") {
        return <UploadFile key={index} id={q._id} title={q.title} />;
      }

      return null;
    });
  };

  return (
    <div className={classes.root}>
      {renderQuestionData(data)}
      <Submit />
    </div>
  );
}

export default QuestionLists;
