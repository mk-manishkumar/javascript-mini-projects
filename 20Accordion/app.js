const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

function showFaq(e) {
  document.getElementById("ans" + e).setAttribute("class", "show");
  btnStatusUpdate(e);
}

function createFaq() {
  for (const item in faqData) {
    // Div Element Created for Faq
    let faqItem = document.createElement("div");
    faqItem.className = "faq";
    faqItem.id = "faq" + faqData[item].id;

    // h3 Element created for Faq Heading
    let faqHeader = document.createElement("h3");
    faqHeader.className = "faq_header";
    faqHeader.id = "q" + faqData[item].id;
    faqHeader.textContent = faqData[item].question;
    faqItem.appendChild(faqHeader);

    // h3 Element created for Faq Heading
    let faqPara = document.createElement("p");
    faqPara.className = "hidden";
    faqPara.id = "ans" + faqData[item].id;
    faqPara.textContent = faqData[item].answer;
    faqItem.appendChild(faqPara);

    // Element Created for show button
    let showBtn = document.createElement("i");
    showBtn.className = "show_btn";
    showBtn.textContent = "+";
    showBtn.id = faqData[item].id;
    showBtn.setAttribute("onclick", "showFaq(" + faqData[item].id + ")");
    showBtn.style.textAlign = "center";
    faqHeader.appendChild(showBtn);

    accordianBody.appendChild(faqItem);
  }
}

createFaq();

function btnStatusUpdate(e) {
  let showBtn = document.getElementById(e);
  if (showBtn.innerText == "+") {
    showBtn.innerText = "-";
  } else {
    showBtn.innerText = "+";
    document.querySelector("#ans" + e).setAttribute("class", "hidden");
  }
}
