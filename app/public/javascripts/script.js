const questions = [
    /*{
      //0
      question: "",
      question2: "",
      answers: [
        { text: "", correct: true },
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: false },
      ],
    },*/
    {
      //1
      question:
        "현재 test.txt 파일의 권한은 다음과 같다. 이 파일에서 사용자와 그룹에 실행 권한을 추가하는 명령어로 옳은 것은?",
      question2: "-rw-rw-r-- 1 saen0zu saen0zu     0 Jan  9 23:44 test.txt",
      answers: [
        { text: "chmod 764 test.txt", correct: false },
        { text: "chmod 774 test.txt", correct: true },
        { text: "chmod 755 test.txt", correct: false },
        { text: "chmod 667 test.txt", correct: false },
      ],
    },
    {
      //6
      question: "rax=0x1234567890abcdef 일 때, ax는?",
      question2: "",
      answers: [
        { text: "0xcdef", correct: true },
        { text: "0x1234", correct: false },
        { text: "0x5678", correct: false },
        { text: "0x90ab", correct: false },
      ],
    },
    {
      //7
      question: "rax=0x1234567890abcdef 일 때, ah는?",
      question2: "",
      answers: [
        { text: "0xef", correct: false },
        { text: "0x12", correct: false },
        { text: "0x34", correct: false },
        { text: "0xcd", correct: true },
      ],
    },
    {
      //8
      question:
        "test.txt 파일에 다음과 같은 명령을 실행했을 때, test.txt 파일의 변경된 권한으로 옳은 것은?",
      question2: "chmod 655 test.txt",
      answers: [
        { text: "-rw-rw-r--", correct: false },
        { text: "-rw-r-xr-x", correct: true },
        { text: "-rwx-wx-wx", correct: false },
        { text: "-r-xrw-rw-", correct: false },
      ],
    },
    {
      //9
      question:
        "현재 text.txt 파일의 권한은 다음과 같다. 이 파일에서 사용자와 그룹에 실행 권한을 추가하는 명령어로 옳은 것은?",
      question2: "-rw-rw-r-- 1 saen0zu saen0zu     0 Jan  9 23:44 test.txt",
      answers: [
        { text: "chmod 764 test.txt", correct: false },
        { text: "chmod 774 test.txt", correct: true },
        { text: "chmod 755 test.txt", correct: false },
        { text: "chmod 667 test.txt", correct: false },
      ],
    },
    {
      //12
      question:
        "eax=0xC0FFEE01 일 때, al를 0x16으로 바꾸었을 때 ax의 값으로 옳은 것은?",
      question2: "",
      answers: [
        { text: "0xEE16", correct: true },
        { text: "0x1601", correct: false },
        { text: "0xC0FF", correct: false },
        { text: "0xC016", correct: false },
      ],
    },
    {
      //16
      question:
        "다음 중 산술 연산 및 함수 리턴 값에 쓰이는 레지스터로 옳은 것은?",
      question2: "",
      answers: [
        { text: "AX", correct: true },
        { text: "IP", correct: false },
        { text: "BX", correct: false },
        { text: "CX", correct: false },
      ],
    },
    {
      //17
      question:
        "다음 중 스택의 최상단을 가리키는 포인터인인 레지스터로 옳은 것은?",
      question2: "",
      answers: [
        { text: "SP", correct: true },
        { text: "BP", correct: false },
        { text: "IP", correct: false },
        { text: "BX", correct: false },
      ],
    },
    {
      //18
      question: "다음 중 스택의 베이스를 가리키는 포인터인 레지스터로 옳은 것은?",
      question2: "",
      answers: [
        { text: "BP", correct: true },
        { text: "IP", correct: false },
        { text: "SP", correct: false },
        { text: "BX", correct: false },
      ],
    },
    {
      //19
      question:
        "다음 중 다음에 실행되어야 할 명령어의 주소를 가리키는 레지스터로 옳은 것은?",
      question2: "",
      answers: [
        { text: "IP", correct: true },
        { text: "SI", correct: false },
        { text: "DI", correct: false },
        { text: "AX", correct: false },
      ],
    },
    {
      //20
      question: "다음 코드의 변수 a가 저장되는 곳은?",
      question2:
        '#include \<stdio.h\>\n\n\
  int a;\n\
  char b[] = "CAT-Security";\n\n\
  int main()\n\
  {\n\
      printf("Hello, %s!\\n", b);\n\
      int c = 2;\n\
      static int d = 3;\n\
      printf("%d + %d = %d", c, d, c+d);\n\n\
      return 0;\n\
  }',
      answers: [
        { text: "bss", correct: true },
        { text: "data", correct: false },
        { text: "stack", correct: false },
        { text: "heap", correct: false },
      ],
    },
    {
      //21
      question: '다음 코드의 "CAT-Security"가 저장되는 곳은?',
      question2:
        '#include \<stdio.h\>\n\n\
  int a;\n\
  char b[] = "CAT-Security";\n\n\
  int main()\n\
  {\n\
      printf("Hello, %s!\\n", b);\n\
      int c = 2;\n\
      static int d = 3;\n\
      printf("%d + %d = %d", c, d, c+d);\n\n\
      return 0;\n\
  }',
      answers: [
        { text: "rodata", correct: true },
        { text: "data", correct: false },
        { text: "stack", correct: false },
        { text: "heap", correct: false },
      ],
    },
    {
      //22
      question: "다음 코드의 변수 c가 저장되는 곳은?",
      question2:
        '#include \<stdio.h\>\n\n\
  int a;\n\
  char b[] = "CAT-Security";\n\n\
  int main()\n\
  {\n\
      printf("Hello, %s!\\n", b);\n\
      int c = 2;\n\
      static int d = 3;\n\
      printf("%d + %d = %d", c, d, c+d);\n\n\
      return 0;\n\
  }',
      answers: [
        { text: "stack", correct: true },
        { text: "heap", correct: false },
        { text: "code", correct: false },
        { text: "data", correct: false },
      ],
    },
    {
      //23
      question: "다음 코드의 변수 b가 저장되는 곳은?",
      question2:
        '#include \<stdio.h\>\n\n\
  int a;\n\
  char b[] = "CAT-Security";\n\n\
  int main()\n\
  {\n\
      printf("Hello, %s!\\n", b);\n\
      int c = 2;\n\
      static int d = 3;\n\
      printf("%d + %d = %d", c, d, c+d);\n\n\
      return 0;\n\
  }',
      answers: [
        { text: "data", correct: true },
        { text: "heap", correct: false },
        { text: "bss", correct: false },
        { text: "stack", correct: false },
      ],
    },
    {
      //24
      question: "다음 코드의 변수 d가 저장되는 곳은?",
      question2:
        '#include \<stdio.h\>\n\n\
  int a;\n\
  char b[] = "CAT-Security";\n\n\
  int main()\n\
  {\n\
      printf("Hello, %s!\\n", b);\n\
      int c = 2;\n\
      static int d = 3;\n\
      printf("%d + %d = %d", c, d, c+d);\n\n\
      return 0;\n\
  }',
      answers: [
        { text: "data", correct: true },
        { text: "heap", correct: false },
        { text: "bss", correct: false },
        { text: "stack", correct: false },
      ],
    },
    {
      //25
      question: "다음 중 스택의 특성으로 옳지 않은 것은?",
      question2: "",
      answers: [
        { text: "먼저 들어온 데이터를 먼저 처리한다.", correct: true },
        { text: "지역변수와 매개변수가 저장되는 영역이다.", correct: false },
        { text: "높은 주소에서 낮은 주소의 방향으로 할당된다.", correct: false },
        { text: "함수의 호출과 함께 할당되며 호출이 완료되면 소멸한다.", correct: false },
      ],
    },
    {
      //26
      question: "다음 중 힙의 특성으로 옳지 않은 것은?",
      question2: "",
      answers: [
        { text: "높은 주소에서 낮은 주소의 방향으로 할당된다.", correct: true },
        { text: "먼저 들어온 데이터를 먼저 처리한다.", correct: false },
        {
          text: "사용자에 의해 메모리 공간이 동적으로 할당되고 해제된다.", correct: false },
        { text: "메모리 크기 제한이 없다.", correct: false },
      ],
    },
    {
      //27
      question: "다음 중 컴파일 과정으로 옳은 것은?",
      question2: "",
      answers: [
        { text: "전처리 - 컴파일 - 어셈블리 - 링커", correct: true },
        { text: "전처리 - 어셈블리 - 링커 - 컴파일", correct: false },
        { text: "전처리 - 링커 - 컴파일 - 어셈블리", correct: false },
        { text: "전처리 - 컴파일 - 링커 - 어셈블리", correct: false },
      ],
    },
    {
      //28
      question:
        "다음 어셈블리어 명령어는 leave 명령이 실행하는 명령어이다. A와 B에 들어갈 레지스터로 옳은 것은?",
      question2: "mov A, B\npop %ebp",
      answers: [
        { text: "A: %ebp, B: %esp", correct: true },
        { text: "A: %esp, B: %ebp", correct: false },
        { text: "A: %ebp, B: %eip", correct: false },
        { text: "A: %esp, B: %eip", correct: false },
      ],
    },
    {
      //29
      question:
        "다음 어셈블리어 명령어는 ret 명령이 실행하는 명령어이다. A에 들어갈 레지스터로 옳은 것은?",
      question2: "pop A\njmp A",
      answers: [
        { text: "%eip", correct: true },
        { text: "%esp", correct: false },
        { text: "%ebp", correct: false },
        { text: "%eax", correct: false },
      ],
    },
    {
      //30
      question:
        "다음 어셈블리어 명령어는 함수 프롤로그가 실행하는 명령어이다. A와 B에 들어갈 레지스터로 옳은 것은?",
      question2: "push A\nmov B, A",
      answers: [
        { text: "A: %esp, B: %ebp", correct: true },
        { text: "A: %ebp, B: %esp", correct: false },
        { text: "A: %ebp, B: %eip", correct: false },
        { text: "A: %eip, B: %esp", correct: false },
      ],
    },
    {
      question: "다음 어셈블리 코드 실행 후 eax의 값으로 옳은 것은?",
      question2: "movl $10, %eax\n\
  addl $5, %eax\n\
  subl $3, %eax",
      answers: [
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "5", correct: false },
        { text: "10", correct: false },
      ],
    },{
      question: "레지스터, 메모리와 코드가 다음과 같다. 1번 코드까지 실행했을 때 eax에 저장된 값은?",
      question2: "[Register]\n\
  ebx = 0x4e8a40\n\
  ========================\n\
  [Memory]\n\
  0x4e8a40 | 0xDEADBEEF\n\
  0x4e8a48 | 0xC0FFEE12\n\
  0x4e8a50 | 0xBEA7C0DE\n\
  0x4b4a58 | 0xC0DEB00K\n\
  ========================\n\
  [Code]\n\
  1: mov (%ebx), %eax\n\
  2: lea 8(%ebx), %eax",
      answers: [
        { text: "0xC0FFEE12", correct: true },
        { text: "0x4e8a48", correct: false },
        { text: "0x4e8a50", correct: false },
        { text: "0xDEADBEEF", correct: false },
      ],
    },{
      question: "레지스터, 메모리와 코드가 다음과 같다. 2번 코드까지 실행했을 때 eax에 저장된 값은?",
      question2: "[Register]\n\
  ebx = 0x4e8a40\n\
  ========================\n\
  [Memory]\n\
  0x4e8a40 | 0xDEADBEEF\n\
  0x4e8a48 | 0xC0FFEE12\n\
  0x4e8a50 | 0xBEA7C0DE\n\
  0x4b4a58 | 0xC0DEB00K\n\
  ========================\n\
  [Code]\n\
  1: mov 8(%ebx), %eax\n\
  2: lea 8(%ebx), %eax",
      answers: [
        { text: "0x4e8a48", correct: true },
        { text: "0xC0FFEE12", correct: false },
        { text: "0x4b4a58", correct: false },
        { text: "0xC0DEB00K", correct: false },
      ],
    }
  ];
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  shuffle(questions);
  
  const countdownElement = document.getElementById("countdown");
  const questionElement = document.getElementById("question");
  const question2BoxElement = document.getElementById("question2-box");
  const question2Element = document.getElementById("question2");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const warpButton = document.getElementById("warp-btn");
  const maxQuestion = questions.length;
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 360;

  function countdown() {
    var timerVar = setInterval(function() {
      if (timeLeft < 0) {
        clearInterval(timerVar);
        showScore(1);
      } else if (nextButton.innerHTML === "Play Again") {
        clearInterval(timerVar);
        showScore(0);
      }else {
        countdownElement.innerHTML = timeLeft;
      }
      timeLeft--;
    }, 1000);
  }
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    countdown();
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;
    question2Element.innerHTML = currentQuestion.question2;
    if (currentQuestion.question2 == "") {
      question2BoxElement.style.display = "none";
    }
    shuffle(currentQuestion.answers);
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    timeLeft = 360;
    nextButton.style.display = "none";
    warpButton.style.display = "none";
    question2BoxElement.style.display = "block";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore(code) {
    resetState();
    
    if (code == 1) {
      questionElement.innerHTML = `Timeout!!!\nYou scored ${score} out of ${maxQuestion}!`;
    }
    else {
      questionElement.innerHTML = `You scored ${score} out of ${maxQuestion}!`;
    }
    question2Element.innerHTML = "";
    question2BoxElement.style.display = "none";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "inline-block";
    warpButton.style.display = "inline-block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestion) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < maxQuestion) {
      handleNextButton();
    } else {
      location.href='/';
    }
  });
  
  warpButton.onclick = function() {
    usr_name = document.getElementById('usr-name').value;
    location.href = `/saveScore?name=${usr_name}&score=${score}&countdown=${timeLeft}`;
  }


  startQuiz();
