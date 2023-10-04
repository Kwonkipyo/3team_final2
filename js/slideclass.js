window.addEventListener("load", function () {
  // 콤마 기능
  function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // data.json을 연결.
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    const req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // 글자로 온 데이터를 객체로 변환
      // 글자가 JSON 규칙대로 만들어진 문자열.
      // 그러므로 JSON 글자를 객체로 변환해서 활용한다.
      let obj = JSON.parse(str);

      BEST_CLASS = obj.bestclass;
      AI_CLASS = obj.aiclass;
      NEW_CLASS = obj.newclass;
      BEST_CLASS2 = obj.bestclass2;
      AI_CLASS2 = obj.aiclass2;
      NEW_CLASS2 = obj.newclass2;

      showBestClass(); // 인기 클래스 화면에 배치
      showAiClass(); // 맞춤 클래스 화면에 배치
      showNewClass(); // 신규 클래스 화면에 배치
      showBestClass2(); // 인기 클래스2 화면에 배치
      showAiClass2(); // 맞춤 클래스2 화면에 배치
      showNewClass2(); // 신규 클래스2 화면에 배치
    }
  };
  // 자료 호출
  xhttp.open("GET", "data.json");
  // 웹 브라우저 기능 실행할 수 있도록 요청
  xhttp.send();

  let BEST_CLASS;
  let AI_CLASS;
  let NEW_CLASS;
  let bestClassTag = document.getElementById("data-bestclass");
  let aiClassTag = document.getElementById("data-aiclass");
  let newClassTag = document.getElementById("data-newclass");
  let BEST_CLASS2;
  let AI_CLASS2;
  let NEW_CLASS2;
  let bestClassTag2 = document.getElementById("data-bestclass2");
  let aiClassTag2 = document.getElementById("data-aiclass2");
  let newClassTag2 = document.getElementById("data-newclass2");

  // 인기 클래스 화면 출력 기능
  function showBestClass() {
    let html = `
    <div class="bestclass-item-box item-box">
    `;

    BEST_CLASS.forEach(function (item) {
      let tag = `
        <a href="${item.link}" class="class-item">
            <div class="class-box" style="background-image: url('images/${item.pic}')">
                <span class="class-type ${item.class}">${item.tag}</span>
                <p class="class-ranking">${item.ranking}</p>
            </div>
            <div class="class-txt">
              <p class="class-txt-top class-count">
                <i class="fa-solid fa-bullhorn"></i>
                <span>${item.count}</span>건이 진행되었어요!
              </p>
                <!-- 제품정보 -->
                <p class="class-info">${item.name}</p>
                <!-- 강사명 -->
                <p class="class-teacher">${item.teacher}</p>
                <!-- 제품가격 -->
                <p class="class-price">~ ${priceToString(item.price)}원</p>
            </div>
        </a>
        `;
      html += tag;
    });
    html += `
    </div>
    `;
    bestClassTag.innerHTML = html;
  }

  // 맞춤 클래스 화면 출력 기능
  function showAiClass() {
    let html = `
    <div class="aiclass-item-box item-box">
    `;

    AI_CLASS.forEach(function (item) {
      let tag = `
        <a href="${item.link}"class="class-item">
            <div class="class-box" style="background-image: url('images/${item.pic}')">
                <span class="class-type ${item.class}">${item.tag}</span>
            </div>
            <div class="class-txt">
              <p class="class-txt-top class-grade">
              <i class="fa-solid fa-bullhorn"></i>
                평점이 <span>${item.grade}</span>점이에요!
              </p>
                <!-- 제품정보 -->
                <p class="class-info">${item.name}</p>
                <!-- 강사명 -->
                <p class="class-teacher">${item.teacher}</p>
                <!-- 제품가격 -->
                <p class="class-price">~ ${priceToString(item.price)}원</p>
            </div>
        </a>
        `;
      html += tag;
    });
    html += `
    </div>
    `;
    aiClassTag.innerHTML = html;
  }

  // 신규 클래스 화면 출력 기능
  function showNewClass() {
    let html = `
    <div class="newclass-item-box item-box">
    `;

    NEW_CLASS.forEach(function (item) {
      let tag = `
        <a href="${item.link}" class="class-item">
            <div class="class-box" style="background-image: url('images/${item.pic}')">
                <span class="class-type ${item.class}">${item.tag}</span>
            </div>
            <div class="class-txt">
              <p class="class-txt-top class-new">
              <i class="fa-solid fa-bullhorn"></i>
                <span>${item.date}</span> 오픈했어요!
              </p>
                <!-- 제품정보 -->
                <p class="class-info">${item.name}</p>
                <!-- 강사명 -->
                <p class="class-teacher">${item.teacher}</p>
                <!-- 제품가격 -->
                <p class="class-price">~ ${priceToString(item.price)}원</p>
            </div>
        </a>
        `;
      html += tag;
    });
    html += `
    </div>
    `;
    newClassTag.innerHTML = html;
  }

  // 인기 클래스2 화면 출력 기능
  function showBestClass2() {
    let html = `
    <div class="bestclass-item-box item-box">
    `;

    BEST_CLASS2.forEach(function (item) {
      let tag = `
      <a href="${item.link}" class="class-item">
          <div class="class-box" style="background-image: url('images/${item.pic}')">
              <span class="class-type ${item.class}">${item.tag}</span>
              <p class="class-ranking">${item.ranking}</p>
          </div>
          <div class="class-txt">
            <p class="class-txt-top class-count">
              <i class="fa-solid fa-bullhorn"></i>
                <span>${item.count}</span>건이 진행되었어요!
            </p>
              <!-- 제품정보 -->
              <p class="class-info">${item.name}</p>
              <!-- 강사명 -->
                <p class="class-teacher">${item.teacher}</p>
              <!-- 제품가격 -->
              <p class="class-price">~ ${priceToString(item.price)}원</p>
          </div>
      </a>
        `;
      html += tag;
    });
    html += `
    </div>
    `;
    bestClassTag2.innerHTML = html;
  }

  // 맞춤 클래스2 화면 출력 기능
  function showAiClass2() {
    let html = `
    <div class="aiclass-item-box item-box">
    `;

    AI_CLASS2.forEach(function (item) {
      let tag = `
        <a href="${item.link}" class="class-item">
            <div class="class-box" style="background-image: url('images/${item.pic}')">
                <span class="class-type ${item.class}">${item.tag}</span>
            </div>
            <div class="class-txt">
              <p class="class-txt-top class-grade">
              <i class="fa-solid fa-bullhorn"></i>
                평점이 <span>${item.grade}</span>점이에요!
              </p>
                <!-- 제품정보 -->
                <p class="class-info">${item.name}</p>
                <!-- 강사명 -->
                <p class="class-teacher">${item.teacher}</p>
                <!-- 제품가격 -->
                <p class="class-price">~ ${priceToString(item.price)}원</p>
            </div>
        </a>
        `;
      html += tag;
    });
    html += `
    </div>
    `;
    aiClassTag2.innerHTML = html;
  }

  // 신규 클래스2 화면 출력 기능
  function showNewClass2() {
    let html = `
    <div class="newclass-item-box item-box">
    `;

    NEW_CLASS2.forEach(function (item) {
      let tag = `
        <a href="${item.link}" class="class-item">
            <div class="class-box" style="background-image: url('images/${item.pic}')">
                <span class="class-type ${item.class}">${item.tag}</span>
            </div>
            <div class="class-txt">
              <p class="class-txt-top class-new">
              <i class="fa-solid fa-bullhorn"></i>
                <span>${item.date}</span> 오픈했어요!
              </p>
                <!-- 제품정보 -->
                <p class="class-info">${item.name}</p>
                <!-- 강사명 -->
                <p class="class-teacher">${item.teacher}</p>
                <!-- 제품가격 -->
                <p class="class-price">~ ${priceToString(item.price)}원</p>
            </div>
        </a>
        `;
      html += tag;
    });
    html += `
    </div>
    `;
    newClassTag2.innerHTML = html;
  }

  // .class-plus 요소를 선택
  const bestPlusButton = document.querySelector(".best-plus");
  const bestPlusIcon = document.querySelector(".best-plus i");
  const bestWrap2 = document.querySelector(".best-wrap2");
  const classPlusBlock = document.querySelector(".class-plus-block");
  const classPlusNone = document.querySelector(".class-plus-none");
  const aiPlusButton = document.querySelector(".ai-plus");
  const aiWrap2 = document.querySelector(".ai-wrap2");
  const newPlusButton = document.querySelector(".new-plus");
  const newWrap2 = document.querySelector(".new-wrap2");

  bestPlusButton.addEventListener("click", function () {
    if (bestWrap2.style.display === "none" || bestWrap2.style.display === "") {
      bestWrap2.style.display = "block";
      bestPlusButton.style.transform = "translateY(10px)";
      bestPlusIcon.style.transform = "rotate(180deg)";
      classPlusBlock.style.display = "none"
      classPlusNone.style.display = "block"
    } else {
      bestWrap2.style.display = "none";
      bestPlusButton.style.transform = "translateY(0)";
      bestPlusIcon.style.transform = "rotate(0deg)";
      classPlusBlock.style.display = "block"
      classPlusNone.style.display = "none"
      
    }
  });
  aiPlusButton.addEventListener("click", function () {
    if (aiWrap2.style.display === "none" || aiWrap2.style.display === "") {
      aiWrap2.style.display = "block";
      aiPlusButton.style.transform = "translateY(10px)";
    } else {
      aiWrap2.style.display = "none";
      aiPlusButton.style.transform = "translateY(0)";
    }
  });
  newPlusButton.addEventListener("click", function () {
    if (newWrap2.style.display === "none" || newWrap2.style.display === "") {
      newWrap2.style.display = "block";
      newPlusButton.style.transform = "translateY(10px)";
    } else {
      newWrap2.style.display = "none";
      newPlusButton.style.transform = "translateY(0)";
    }
  });
});