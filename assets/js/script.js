// Publications: [year, title, venue, authors, doi, type (j=journal, c=conference), lung?]
const V = "Aanchal Vij";
const P = [
[2026,"Hybrid CNN-Based Transformer Pipeline With Radiomic Fusion for Multi-Class Lung Cancer Detection","Journal of Computer Science, 22(6), 1785–1796",V+", Kuldeep Singh Kaswan, Anand Nayyar","10.3844/jcssp.2026.1785.1796","j",1],
[2026,"Machine Learning Advancements for Lung Cancer Detection: An In-Depth Review and Future Prospects","Journal of Computer Science, 22(1), 260–272",V+", Kuldeep Singh Kaswan, Anand Nayyar","10.3844/jcssp.2026.260.272","j",1],
[2026,"From Detection to Decision Support: A Hybrid CNN-Transformer Model for Early Lung Cancer Screening","IEEE IC2PCT 2026",V+", Kuldeep Singh Kaswan, Anand Nayyar","10.1109/IC2PCT68894.2026.11584483","c",1],
[2026,"AI-Powered Resume and Job Description Matcher: A Semantic Similarity Approach Using SBERT and Contrastive Fine-Tuning","IEEE ICSFT 2026","Jitendra Singh, Mekhala, Kamini Tanwar, Ashish Kumar, "+V+", Ashish Jain","10.1109/ICSFT66733.2026.11507545","c",0],
[2026,"Bridging Fiber Optic and Free-Space Optical Communication: A Comparative Study and Hybrid Framework Using Artificial Intelligence","IEEE I3CTCON 2026",V+", Priyanka Gaba, Sourav Vij","10.1109/I3CTCON68242.2026.11507287","c",0],
[2026,"Insect and Pest Recognition: A Lightweight Adaptive Feature-Level Ensemble Learning Approach","IEEE GTSS 2026",V+" et al.","10.1109/GTSS68743.2026.11679638","c",0],
[2026,"An Interpretable CNN Ensemble Framework for Multi-Class Lung Cancer Classification","IEEE GTSS 2026",V+" et al.","10.1109/GTSS68743.2026.11679541","c",1],
[2026,"Benchmarking Pretrained Language Models as Pseudo-Label Annotators for Financial Sentiment Analysis","IEEE GTSS 2026",V+" et al.","10.1109/GTSS68743.2026.11679744","c",0],
[2026,"DSMNet-V3: Lightweight Dual-Stream ROI-Focused MobileNetV3 Network for Driver Drowsiness Detection","IEEE GTSS 2026",V+" et al.","10.1109/GTSS68743.2026.11679671","c",0],
[2025,"An Enhanced CT-Based Lung Cancer Classification Framework Using a Hybrid EfficientNetV2, CBAM, and Transformer Architecture","IEEE ACET 2025",V+", Kuldeep Singh Kaswan, Anand Nayyar","10.1109/ACET67282.2025.11430402","c",1],
[2025,"Multilevel Optimization with Hybrid Stack Model for Lung Cancer Classification","J. Information Systems Engineering and Management, 10(28s), 993–1019",V+", Kuldeep Singh Kaswan, Anand Nayyar","10.52783/jisem.v10i28s.4762","j",1],
[2025,"Machine Learning-Based Image Analysis for Cotton Crop Health: A Comparative Study","IEEE MRIE 2025","Ankit Yadav, Vinay Sharma, "+V+", Jitendra Singh, Amit Chaudhary","10.1109/MRIE66930.2025.11156686","c",0],
[2025,"Multi-Modal Plagiarism Detection in the Era of AI: A Comprehensive Review and Novel Framework Proposal","IEEE ACET 2025","Anshu Kumar, Purushottam Choudhary, Anirban Dutta, "+V,"10.1109/ACET67282.2025.11430248","c",0],
[2024,"Comparative Analysis of Web APIs: RESTful and GraphQL","Lecture Notes in Electrical Engineering, 1232, 159–169","Aparna Seth, Vinay Kumar, Vaibhav Kulshrestha, "+V,"10.1007/978-981-97-5231-7_14","c",0],
[2023,"Prediction of Lung Cancer using Convolution Neural Networks","IEEE AISC 2023, 737–741",V+", Kuldeep Singh Kaswan","10.1109/AISC56616.2023.10085058","c",1],
[2023,"Artificial Intelligence and Regulatory Framework for Sustainable Plastic Management: An Analytical Study towards Achieving SDGs","IEEE ICCSAI 2023","Isha Pandey, Sandhya Kumari, "+V,"10.1109/ICCSAI59793.2023.10421531","c",0],
[2022,"Lung Cancer Detection Using Scan Images","IEEE ICAC3N 2022","Kartik Kumar, Shivank Srivastava, "+V,"10.1109/ICAC3N56670.2022.10074331","c",1],
[2022,"Comparative Analysis of Workflow Management System using Agents and Multi-agents in Colored Petri Nets","IEEE ICDCECE 2022",V+", Kuldeep Singh Kaswan, Chinar Bawa","10.1109/ICDCECE53908.2022.9792729","c",0],
[2022,"Case Study on Online Fraud Detection using Machine Learning","IEEE ICACITE 2022","Ayushi Pandey, Harsh Jaiswal, "+V+", Tushar Mehrotra","10.1109/ICACITE53722.2022.9823538","c",0],
[2022,"An Instructional Approach to Power System Operations Utilizing Load Flow Simulations","IEEE INCOFT 2022","Upasana Rani, "+V,"10.1109/INCOFT55651.2022.10094416","c",0],
[2021,"Research Problems in Recommender Systems","Journal of Physics: Conference Series, 1717, 012002","Nitin Mishra, Saumya Chaturvedi, "+V+", Sunita Tripathi","10.1088/1742-6596/1717/1/012002","c",0],
[2015,"A Review on Agent Oriented Software Engineering","Int. J. Advanced Research in Computer and Communication Engineering",V+" et al.","10.17148/IJARCCE.2015.4495","j",0],
[2015,"A Review on Genetic Algorithm to Deal with Optimization of Parameters of Constructive Cost Model","Int. J. Advanced Research in Computer and Communication Engineering",V+" et al.","10.17148/IJARCCE.2015.4491","j",0],
[2015,"Metrics for Project Estimation in Software Engineering: A Review","International Multi Track Conference (IMTC), 187–190",V+" et al.","","c",0],
[2015,"A Study on Tools Used to Implement Agent Oriented Software Engineering","Int. J. Innovative Research in Computer and Communication Engineering, 150–155",V+" et al.","","j",0],
[2014,"A Review of Handoff and Location Management in Ad-Hoc Networks","ICCCS 2014",V+", Jyooteesh Malhotra","","c",0]
];
const list = document.getElementById("pubs");
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
function render(f) {
  list.innerHTML = P.filter(p => f === "all" || (f === "lung" ? p[6] : p[5] === f)).map(p =>
    `<li><span class="y">${p[0]}</span><div><div class="t">${esc(p[1])}</div>` +
    `<div class="a">${esc(p[3]).replace(V, "<strong>" + V + "</strong>")}</div>` +
    `<div class="v">${esc(p[2])}${p[4] ? ` · <a class="d" href="https://doi.org/${p[4]}" target="_blank" rel="noopener">DOI ${p[4]}</a>` : ""}</div></div></li>`
  ).join("");
}
render("all");
document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.classList.toggle("on", x === b));
  render(b.dataset.f);
}));

// Mobile menu
const menu = document.querySelector(".menu"), links = document.getElementById("links");
menu.addEventListener("click", () => menu.setAttribute("aria-expanded", links.classList.toggle("open")));
links.addEventListener("click", e => { if (e.target.tagName === "A") { links.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); } });

// Highlight current section in nav
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();

// Scroll buttons
const up = document.getElementById("up"), down = document.getElementById("down");
function toggleScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  up.hidden = scrollY < 400;
  down.hidden = scrollY > max - 300;
}
addEventListener("scroll", toggleScroll, { passive: true });
addEventListener("resize", toggleScroll);
toggleScroll();
up.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
down.addEventListener("click", () => scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" }));

// Gallery slider
const track = document.getElementById("track");
const step = () => track.querySelector("figure").getBoundingClientRect().width + 16;
document.getElementById("prev").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
document.getElementById("next").addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
