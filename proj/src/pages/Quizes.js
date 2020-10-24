import React, { useState } from "react";
import "../css/Quiz.css";
import image from "../images/computer.png";

import { Image, Container } from "react-bootstrap";


//easy images
import easy1 from "../images/easy/easy1.png";
import easy2 from "../images/easy/easy2.png";
import easy3 from "../images/easy/easy3.png";
import easy4 from "../images/easy/easy4.png";

//medium images
import medium2 from "../images/medium/medium2.png";

//hard images

// import QuizNavbar from "../components/QuizNavbar/QuizNavbar";

export default function Quiz() {

  const easy = [
    {
      questionText: "ما هي وظيفة الرامات في الجهاز ؟ ",
      answerOptions: [
        { answerText: "تساعد على تخزين المعلومات", isCorrect: false },
        { answerText: "هي النظام في الجهاز", isCorrect: false },
        { answerText: "لا يوجد لها وظيفة", isCorrect: false },
        {
          answerText: "يمكن من خلالها القراءة عليها والكتابة بواسطة البرامج",
          isCorrect: true,
        },
      ],
      src: easy1,
    },
    {
      questionText: "ما هي الفيروسات في الجهاز ؟ ",
      answerOptions: [
        { answerText: "هي مجموعة مفيدة و تساعد الجهاز", isCorrect: false },
        { answerText: "فايروس كورونا ؟", isCorrect: false },
        {
          answerText:
            "هي مجموعة من البرامج الضارة بالملفات الموجودة داخل الجهاز",
          isCorrect: true,
        },
        {
          answerText:
            "عامل ممرض صغير لا يمكنه التكاثر إلا داخل خلايا كائن حي آخر",
          isCorrect: false,
        },
      ],

      src: easy2,
    },
    {
      questionText: "ما معنى كلمة LAN",
      answerOptions: [
        { answerText: "Local a Network", isCorrect: false },
        { answerText: "Local Area Network", isCorrect: true },
        { answerText: "Local a box Network", isCorrect: false },
        { answerText: "Local network", isCorrect: false },
      ],

      src: easy3,
    },
    {
      questionText: "ما هو الويندوز ؟ Windows",
      answerOptions: [
        { answerText: "هو النظام في الجهاز", isCorrect: true },
        { answerText: "هو الرامات", isCorrect: false },
        { answerText: "هو كرت الشاشه في الجهاز", isCorrect: false },
        { answerText: "لا يوجد منه بالاجهزه", isCorrect: false },
      ],

      src: easy4,
    },
    {
      questionText:
        "يتم حفظ معلومات وحدات الادخال و الاخراج الخاصه بالجهاز و الشركه المصنعه في :",
      answerOptions: [
        { answerText: "CPU", isCorrect: false },
        { answerText: "Windows", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "ROM", isCorrect: true },
      ],

      src: image,
    },
  ];

  const medium = [
    {
      questionText: "Binary Numbers في الحاسب ما هو ال",
      answerOptions: [
        { answerText: "لغة الحاسوب تُكتب برقم 0 و 1", isCorrect: true },
        { answerText: "عدد رياضي مزدوج", isCorrect: false },
        { answerText: "ترميز عددي ذو مراتب", isCorrect: false },
      ],
      src: image,
    },
    {
      questionText: " CPU في الحاسوب ما هو ال",
      answerOptions: [
        { answerText: "وحدة المعالج المركزية", isCorrect: true },
        { answerText: "ذاكرة الوصول العشوائي", isCorrect: false },
        { answerText: "كرت الشاشة", isCorrect: false },
      ],

      src: medium2,
    },
    {
      questionText: "اي من اللغات التالية تستعمل النقطة لدمج النصوص",
      answerOptions: [
        { answerText: "PHP", isCorrect: true },
        { answerText: "Javascript", isCorrect: false },
        { answerText: "Python", isCorrect: false },
        { answerText: "Java", isCorrect: false },
      ],

      src: image,
    },
  ];

  const hard = [
    {
      questionText: "اي من اللغات التالية هو الأقل شهرة في الذكاء الإصطناعي",
      answerOptions: [
        { answerText: "Java", isCorrect: false },
        { answerText: "Python", isCorrect: false },
        { answerText: "C++", isCorrect: false },
        { answerText: "Javascript", isCorrect: true },
      ],
      src: image,
    },
    {
      questionText: "ما الذي يستطيع الـ Full Stack Developer فعله",
      answerOptions: [
        { answerText: "يمكنه برمجة جميع اللغات", isCorrect: false },
        { answerText: "يمكنه التعامل مع قواعد البيانات", isCorrect: false },
        {
          answerText: "يمكنه برمجة لغات من طرف العميل وطرف الخادم",
          isCorrect: true,
        },
      ],
      src: image,
    },
    {
      questionText: "تقاس سرعة وحدة المعالج المركزية بـ",
      answerOptions: [
        { answerText: "Bit", isCorrect: false },
        { answerText: "Megahertz", isCorrect: true },
        { answerText: "Kilobyte", isCorrect: false },
        { answerText: "MegaByte", isCorrect: false },
      ],
      src: image,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [started, start] = useState(false);

  const [difficulty, setDifficulty] = useState([]);

  const [wrong, pushWrong] = useState([]);

  const handleStart = () => {
    if (started === false) {
      start(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      pushWrong([...wrong, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < difficulty.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    pushWrong([]);
  };

  const goBack = () => {
    start(false);
    restart();
  };

  const styleStarted = {
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
  };



  return (
    <>
      <div style={{ paddingTop: "60px" }} />

      <Container
        className="app"
        style={started === false ? null : styleStarted}
      >
        {showScore ? (
          <>
            <h1 id="score">
              <span id="boldScore">Score:</span> {score} out of{" "}
              {difficulty.length}
            </h1>
            {wrong.length !== 0 ? (
              <>
                <hr />
                <div className="wrongAnswers">
                  <h1>الاسئلة الخاطئة</h1>
                  {wrong.map((answer, i) => {
                    return (
                      <ul>
                        <li key={i}>{`${answer + 1}. ${
                          difficulty[answer].questionText
                        }`}</li>
                      </ul>
                    );
                  })}
                </div>
                <hr />
              </>
            ) : null}
            <div className="score-section">
              <button id="restartButton" onClick={() => restart()}>
                إعادة الإختبار
              </button>
              <button id="goBack" onClick={() => goBack()}>
                الرجوع للبداية
              </button>
            </div>
          </>
        ) : !started ? (
          <>
            <div className="start">
              <h1>إختر صعوبة</h1>
              <div className="difficulties">
                <button
                  id="startQuiz"
                  onClick={() => {
                    handleStart();
                    setDifficulty(easy);
                  }}
                >
                  Easy
                </button>
                <button
                  id="startQuiz"
                  onClick={() => {
                    handleStart();
                    setDifficulty(medium);
                  }}
                >
                  Medium
                </button>
                <button
                  id="startQuiz"
                  onClick={() => {
                    handleStart();
                    setDifficulty(hard);
                  }}
                >
                  Hard
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="question-section">
              <div>
                <Image
                  id="topImg"
                  src={difficulty[currentQuestion].src}
                  alt="#"
                  // width={questions[currentQuestion].width}
                  // height={questions[currentQuestion].height}
                />
              </div>
              <div className="question-count">
                <span>سؤال {currentQuestion + 1}</span>/{difficulty.length}
              </div>

              <div className="question-text">
                {difficulty[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {difficulty[currentQuestion].answerOptions.map(
                (answerOption, i) => (
                  <button
                    key={i}
                    id="quizButton"
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </Container>
    </>
    )
}
