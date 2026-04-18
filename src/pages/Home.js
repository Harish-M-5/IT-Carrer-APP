import React from "react";
import SectionCard from "../components/SectionCard";

function Home() {

const sections = [

{
title: "💻 Coding Practice",
links: [
{ name: "LeetCode", url: "https://leetcode.com/" },
{ name: "HackerRank", url: "https://www.hackerrank.com/" },
{ name: "CodeChef", url: "https://www.codechef.com/" },
]
},

{
title: "🧠 Aptitude Practice",
links: [
{ name: "Indiabix", url: "https://www.indiabix.com/" },
{ name: "PrepInsta", url: "https://prepinsta.com/" }
]
},

{
title: "🎓 Online Courses",
links: [
{ name: "Udemy", url: "https://www.udemy.com/?srsltid=AfmBOoqvi2QqAJKPfnS8oUhPFsTa5AXF3b750Kk4SXcNZHQ33xZp7pB6" },
{ name: "Coursera", url: "https://www.coursera.org/" },
{ name: "Great Learning", url: "https://www.udemy.com/?srsltid=AfmBOoqvi2QqAJKPfnS8oUhPFsTa5AXF3b750Kk4SXcNZHQ33xZp7pB6" }
]
},

{
title: "🗣️ Communication Practice",
links: [
{ name: "Vocabulary", url: "https://www.cambridgeenglish.org/Images/84669-pet-vocabulary-list.pdf" },
{ name: "TalkpakAI", url: "https://app.talkpal.ai/" },
{ name: "Duolingo", url: "https://www.englishtest.duolingo.com/applicants" }
]
},

{
title: "🤖Monk AI Interview",
links: [
{ name: "HR Interview", url: "https://www.lockedinai.com/" },
{ name: "Technical Interview", url: "https://thita.ai/blog/interview/ai-interview-practice-free-mock-simulator?gad_source=1&gad_campaignid=23402226183&gbraid=0AAAABBJNd5sFJ51WO3bGZN28iJsMm0YX8&gclid=CjwKCAjwtIfPBhAzEiwAv9RTJuJZbLp1qvA_K_r_zBSLEcg6R6GPBpW8S-TJNVILMD_N9ZZc_zDBohoC5cEQAvD_BwE" }
]
},

{
title: "💡 Project Ideas",
links: [
{ name: "Mini Projects", url: "https://sageuniversity.in/blogs/mini-project-ideas-for-college-students" },
{ name: "Major Projects", url: "https://nevonprojects.com/project-ideas/software-project-ideas/" }
]
},

{
title: "🤖 AI Assistants",
links: [
{ name: "ChatGPT", url: "https://chatgpt.com/" },
{ name: "Claude", url: "https://claude.ai/new" },
{ name: "Gemini", url: "https://gemini.google.com/" }
]
},

{
title: "💼 Jobs & Internship",
links: [
{ name: "LinkedIn Jobs", url: "https://www.linkedin.com/" },
{ name: "Nakuri", url: "https://www.naukri.com/" },
{ name: "Internshala", url: "https://www.internshala.com/" }
]
},

{
title: "📚 Programming Languages",
links: [
{ name: "Python", url: "https://www.w3schools.com/python/python_intro.asp" },
{ name: "Java", url: "https://www.w3schools.com/python/python_intro.asp" },
{ name: "JavaScript", url: "https://wesbos.com/javascript" },
{ name: "C", url: "https://www.geeksforgeeks.org/c/c-language-introduction/" }
]
},

{
title: "🧑‍💻 Project Tools",
links: [
{ name: "Vscode", url: "https://code.visualstudio.com/" },
{ name: "Github", url: "https://github.com/" },
{ name: "IDE", url: "https://www.jetbrains.com/ides/" },
{ name: "Docker", url: "https://www.docker.com/" }

]
},

{
title: "🧑‍💻 cloud and Deployments",
links: [
{ name: "AWS", url: "https://aws.amazon.com/" },
{ name: "Azure", url: "https://azure.microsoft.com/" },
{ name: "Netlify", url: "https://www.netlify.com/" },
{ name: "Vercel", url: "https://vercel.com/" }
]
},









];

return (
<div className="container">

{sections.map((section,index)=>(
<SectionCard 
key={index}
title={section.title}
links={section.links}
/>
))}

</div>
);

}

export default Home;
