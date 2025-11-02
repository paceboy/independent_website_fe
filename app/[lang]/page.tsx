import { getDictionary } from "./dictionaries";
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Link from "next/link";
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import PageTracking from '../../components/PageTracking';

type PageProps = {
  params: {
    lang: string;
  };
};

export async function generateStaticParams() {
    return [
      { locale: 'en' },
      { locale: 'zh' }
    ];
  }

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return {
    title: t.title,
    description: t.description,
    keywords: "The Global Hub for Indie Hackers, Indie Hacker, developer tools, indie developers, SaaS development, startup tools, developer community, entrepreneurship, product development, tech tools, developer resources",
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      siteName: "One Point Star",
      url: `https://www.onepointstar.com/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    alternates: {
      canonical: `https://www.onepointstar.com/${lang}`,
      languages: {
        'en': 'https://www.onepointstar.com/en',
        'zh': 'https://www.onepointstar.com/zh',
      },
    },
  };
}

// 博客相关代码
const blogPosts = [
  {
    id: 3,
    title: {
      en: "The Role of Detailed Design",
      zh: "详细设计的作用"
    },
    image: "/blog/blog3.jpg",
    summary: {
      en: "For junior engineers facing challenging tasks with tight deadlines, detailed design is the key to managing complexity, coordinating with teams, and ensuring reasonable schedules.",
      zh: "对于初级工程师遇到有挑战的开发任务，详细设计是应对复杂需求、协同各方、争取合理排期的关键。"
    },
    content: {
      en: `
        <div class="my-8 text-center">
          <img src="/blog/blog3.jpg" alt="The Role of Detailed Design" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h1 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>Good Detailed Design Can Expose Problems Early and Reduce Rework in Development</strong></h1>
        
        <p>Recently, a junior software engineer who just started working asked me for advice on a work challenge. They received a task with a tight deadline from their leader, but the implementation difficulty was quite high. Besides the technical aspects, as a backend engineer, they also needed to coordinate with algorithm and frontend teams, which was challenging for a junior engineer. So how should one deal with this problem?</p>
        
        <p>The answer is simple: <strong>Don't rush to write code, but do detailed design first.</strong></p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>A Concept</strong></h2>
        
        <p>Before elaborating on detailed design, there's a concept to clarify:</p>
        
        <p><strong>Requirements describe what the system should be like, while detailed design describes how to implement the system. The corresponding roles are PM and RD.</strong> This statement basically defines the boundaries between roles: PM decides what the system should be like, RD decides how to implement it.</p>
        
        <p>I often encounter situations where, during requirement review meetings, R&D engineers keep discussing or explaining what requirements should or shouldn't be. Although RD can offer suggestions, ultimately PM decides what the system should be like. If this boundary is blurred, discussions often become chaotic.</p>
        
        <p>PM: Product Manager, RD: Research and Development Engineer.</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>What is Detailed Design</strong></h2>
        
        <p>Detailed design is also called technical research. After having clear requirements, you need to break down the requirements, conduct technical research, and confirm the implementation technical solution. Often there will be multiple technical solutions. It's recommended to provide 3 solutions and recommend which one to choose. Provide interface protocols and database design, and preliminarily write some code to verify technical points.</p>
        
        <p>Based on my past experience, here's a general detailed design template:</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Background</strong></h3>
        <ul>
          <li>Description and breakdown of requirements</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Technical Solutions</strong></h3>
        <ul>
          <li>Provide the advantages and disadvantages of the following solutions, and recommend which solution, etc.</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Solution 1 (Recommended)</strong></h3>
        <ul>
          <li>Describe the overall architecture and implementation ideas, preferably in the form of diagrams. A picture is worth a thousand words.</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Solution 2</strong></h3>
        <p>Same as above</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Solution 3</strong></h3>
        <p>Same as above</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Interface Protocol</strong></h3>
        <ul>
          <li>Interface protocols between frontend and backend, backend and algorithm</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Database Table Design</strong></h3>
        <ul>
          <li>Table fields, storage resource evaluation, etc.</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Schedule</strong></h3>
        <ul>
          <li>Present in table format</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Risks</strong></h3>
        <ul>
          <li>List possible risks and third-party dependencies</li>
        </ul>
        
        <p>The above content basically explains the implementation plan clearly. The schedule and risks at the end are very necessary.</p>
        
        <p>The schedule is used to give an objective time estimate, with some redundancy to prevent unexpected problems that could cause blocking points.</p>
        
        <p>Risks mainly refer to uncontrollable issues that may be encountered during implementation, reaching consensus with everyone.</p>
        
        <p>With this assessment, if the Leader presses for an unrealistic schedule, the detailed design can serve as a scientific refutation with reasons and evidence.</p>
        
        <p>After the detailed design is completed, a review meeting can be initiated. Review participants generally need to include PM, QA, and relevant R&D personnel. During the review meeting, you can present your detailed design and listen to everyone's opinions. If there are constructive opinions that you haven't considered, you can record them as Todo items and upgrade the detailed design later.</p>
        
        <p>For review comments, you need to distinguish which are good suggestions and which are poor suggestions. Adopt the former and discard the latter. If there are disputes, it's recommended to think and conduct further research before reaching a conclusion. Often in reviews, there will be situations where both Solution A and Solution B are acceptable. In such cases, whoever initiated the detailed design should make the decision, as they are the person responsible for this system.</p>
        
        <p>Generally, as long as a detailed design is done well, it can basically cover all requirement details, including implementation, schedule, and risks. The Leader can basically judge the implementation difficulty and manpower required for this requirement. If the detailed design review is successfully passed, then start writing code and periodically update progress in the group during the coding process, especially to the Leader and upstream and downstream colleagues, such as QA and integration parties, so they can arrange their next steps.</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>The Role of Detailed Design</strong></h2>
        
        <p>So what is the role of detailed design? It's to <strong>secure reasonable R&D schedules, ensure R&D can work peacefully without being arbitrarily pushed by the Leader, preventing mindset collapse.</strong></p>
        
        <p>The schedule in detailed design is basically very reliable. Once during a development process, I estimated 5 days of work time in the detailed design, but one day I forgot to bring my laptop to the company. In the end, it was delayed by exactly 1 day, taking 6 days of work time.</p>
        
        <p>There's a famous saying in software: <strong>"Deadline is the first productivity."</strong> This point must be evaluated when scheduling in detailed design, because R&D personnel often burst out with super strong drive and work efficiency the day before the deadline, ultimately ensuring that development can be completed before the deadline arrives and enter the next stage - testing.</p>
        
        <p>For engineers who have just entered the software field, especially in the internet industry, having knowledge of detailed design will greatly improve their comprehensive capabilities.</p>
      `,
      zh: `
        <div class="my-8 text-center">
          <img src="/blog/blog3.jpg" alt="详细设计的作用" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h1 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>好的详细设计能提前暴露问题，减少研发中返工的概率</strong></h1>
        
        <p>昨天有一个刚参加工作不久的初级软件工程师，向我请教一个工作中的问题，即遇到了一个挑战很大的开发任务，不知道该如何应对？即领导直接下达了一个有Deadline的任务，但这个任务实现难度有点大，除了技术本身，作为后端，还需要协同算法和前端，因此对于初级工程师还是有些挑战。那么遇到这个问题该如何应对呢？</p>
        
        <p>其实很简单，那就是<strong>不要急于写代码，而是应该先做详细设计。</strong></p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>一个概念</strong></h2>
        
        <p>在阐述详设前，有一个概念需要清楚：</p>
        
        <p><strong>需求是描述系统做成什么样，而详细设计描述如何来实现这个系统，而对应的岗位就是PM和RD。</strong>而这句话基本也定义了岗位之间的边界，系统做成什么样由PM说了算，如何实现由RD说了算。</p>
        
        <p>因为我经常遇到，在需求发布会时，研发一直在讨论或者阐述需求应该是什么，不应该是什么？虽然RD可以提意见，但是最终由PM来决定系统做成什么样。这个边界如果模糊的话，往往讨论就会很紊乱，吵成了一锅粥。</p>
        
        <p>PM：产品经理，RD：研发工程师。</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>什么是详细设计</strong></h2>
        
        <p>详细设计也叫做技术调研，它是在有了明确的需求后，需要将需求做拆解，进行技术调研，确认实现的技术方案。往往技术方案会有多个，这里建议给出3个，并给出推荐选用哪个方案。给出接口协议和数据库设计，可初步写出一些Code，做一些技术点的验证。</p>
        
        <p>这里按照我的过往经验，给一个大致的详设模版。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>背景</strong></h3>
        <ul>
          <li>需求的描述和拆解</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>技术方案</strong></h3>
        <ul>
          <li>给出下列方案的优劣势，以及推荐哪个方案等</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>方案1（推荐）</strong></h3>
        <ul>
          <li>描述整体架构、实现思路，最好以图的形式来展开，一图胜千言。</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>方案2</strong></h3>
        <p>同上</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>方案3</strong></h3>
        <p>同上</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>接口协议</strong></h3>
        <ul>
          <li>前后端、后端和算法的接口协议</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>数据库表设计</strong></h3>
        <ul>
          <li>表字段，存储资源评估等</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>排期</strong></h3>
        <ul>
          <li>以表格形式来展示</li>
        </ul>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>风险</strong></h3>
        <ul>
          <li>列出可能存在的风险和三方依赖</li>
        </ul>
        
        <p>以上内容基本就把实现方案讲的比较清楚了，最后的排期和风险是非常有必要的。</p>
        
        <p>排期用来给出一个客观的工时预估，可以留一些冗余，防止意外问题出现，导致一些Block的点。</p>
        
        <p>风险主要是提出实现过程中，可能会碰到的一些不可控的事项，与大家达成共识。</p>
        
        <p>有了这个评估后，Leader如果去强压一个不靠谱的排期，那么详细设计就可以起到辩驳的作用，且很科学，有理有据。</p>
        
        <p>详细设计完成之后，可以发起评审会议，评审人员一般需要拉PM、QA和相关的研发人员。评审会议中，可以讲述自己的详设，并听取大家的意见，如果有一些建设性的意见，且自己没有考虑到，可以记录Todo，后续升级详设。</p>
        
        <p>对于评审意见，需要分清楚哪些是好的建议，哪些是差的建议，对于前者就采纳，后者要摒弃。如果出现有争议的情况，那么建议经过思考和后续调研后，再给出结论。往往在评审中，会有一种争议的情况，就是用A方案或者B方案均可，那么这种情况下，详细设计发起者是谁，就按照谁的意见来定，因为他是这个系统的负责人。</p>
        
        <p>一般只要一个详细设计做的比较好的话，基本可以覆盖所有的需求细节，且包含了实现、排期和风险等内容，Leader基本就可以判断出这个需求的实现难度和人力。如果详细设计评审成功通过，那么接下来就开始写代码，并在写代码过程中，周期性的群里给大家同步进度，尤其是要给到Leader和上下游的同学，比如QA，联调方等，便于他们安排下一步工作。</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>详细设计的作用</strong></h2>
        
        <p>那么详细设计的作用是什么？就是<strong>争取到合理的研发排期，保证研发可以安心的工作，不受Leader的随意Push，导致心态崩掉。</strong></p>
        
        <p>详细设计的排期基本是很靠谱的。我曾经在一次研发过程中，详细设计时，估算了5天的工时，但有一天，笔记本忘带到公司了，最终正好就延迟了1天，花了6天的工时。</p>
        
        <p>软件领域有句名言：<strong>Deadline是第一生产力。</strong>详细设计排期时一定要把这个点评估进去，因为研发人员往往在Deadline的前一天，会爆发出超强的推进力和工作效率，最终来保障能够在Deadline到来前完成研发，进入下一个环节---提测。</p>
        
        <p>对于初踏入软件领域的工程师，尤其是互联网领域，有了对详细设计的认知后，将会很好地提升自己的综合能力。</p>
      `
    },
    publishedAt: "2025-11-02T10:00:00Z",
    author: "One Point Star",
    tags: ["software-engineering", "development-process", "detailed-design", "project-management", "career-advice"]
  },
  {
    id: 2,
    title: {
      en: "Indie Kickoff First Month Summary",
      zh: "Indie Kickoff第一个月的总结"
    },
            image: "/blog/blog2.jpg",
    summary: {
      en: "The first step is always the hardest, but also the most powerful one.",
      zh: "第一步永远最难，但也是最有力量的一步。"
    },
    content: {
      en: `
        <h1 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>Independent Development: Not Leaving the System, But Rebuilding It</strong></h1>
        
        <div class="my-8 text-center">
                  <img src="/blog/blog2.jpg" alt="Indie Kickoff First Month Summary" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <p>Since September 20th, I've been focusing my main energy on independent development, and it's been a month now.</p>
        
        <p>One key point needs to be highlighted: since investing energy in indie development, I've found that work is no longer draining, but rather very enjoyable and self-driven.</p>
        
        <p>So what have I accomplished? Let me break it down into three aspects:</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>What I Learned</strong></h2>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Cursor for Coding:</strong></h3>
        <p>Previously, I wrote code using the ChatAI approach, but this had a major pain point: AI couldn't access all your code, i.e., context, which meant that after copying code to the IDE, it always required extensive debugging. But after using Cursor's AI Agent, overall efficiency has improved several times.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Some Principles:</strong></h3>
        <p>Many industry veterans have summarized principles for indie hackers. The most important one: <strong>the essence of independent development is doing software business.</strong> Build everything around this.</p>
        <p>Don't be anxious, be resilient.</p>
        <p>Replace phone scrolling with book reading.</p>
        
        <p>The knowledge gained is immense. So what have I done with it, or what outputs have I produced?</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>What I Achieved</strong></h2>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Product Matrix:</strong></h3>
        <p>Completed the launch of 3 websites with a certain user base. This is probably the most rewarding achievement - seeing new users every day makes me feel that the code I write truly has value.</p>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-1.jpg" alt="Product Matrix Results" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Knowledge Base Creation:</strong></h3>
        <p>Using Feishu to create a knowledge base and establish a systematic structure. The directory structure is basically built around the software development process, organized around product, R&D, operations, and marketing workflows.</p>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-2.jpg" alt="Knowledge Base Structure" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-3.jpg" alt="Workflow Process" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Code Repository:</strong></h3>
        <p>Using GitHub, supporting both Public and Private. Since GitHub was acquired by Microsoft, its basic capabilities have been greatly enhanced. A set of automated pipelines is sufficient to support small teams in their early stages.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Deployment Platform:</strong></h3>
        <p>Chose Vercel, with free quotas sufficient to support early operations.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Tech Stack Selection:</strong></h3>
        <p>Frontend: Next.js, Backend: Python, Framework: FastAPI.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Where Do Requirements Come From:</strong></h3>
        <p>Following industry methodology, mainly 3 approaches:</p>
        <ol>
          <li><strong>Record pain points in life,</strong> mainly focusing on scenarios that you and people around you easily complain about;</li>
          <li><strong>Shortcomings of competitors,</strong> look at App Store reviews, record user complaints and negative review scenarios;</li>
          <li><strong>Keyword mining,</strong> especially new words.</li>
        </ol>
        
        <p>Approaches 1 and 3 are used more frequently, approach 2 will be introduced next. I've recorded about 54 pain points in life, with about 5 requirements currently in development.</p>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-4.jpg" alt="Requirement Mining" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <p>Keyword mining mainly relies on tools like Similarweb, Semrush, and Google Trends.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>How to Operate:</strong></h3>
        <p>Since the main goal is to get Google search rankings, the focus of operations is on websites with high Google authority. I've basically identified: GitHub, Zhihu, YouTube, Reddit, Twitter. Except for Reddit being strictly restricted, others have basically entered the state.</p>
        
        <p>One of the most important and fundamental points in operations is creating backlinks. There are two main methods:</p>
        
        <ol>
          <li><strong>Find where competitor websites' backlinks come from on Similarweb or Semrush,</strong> then go create them accordingly. For example, from UGC content, comments, etc. For the keyword "text generate image", Google's top-ranked website: https://deepai.org/machine-learning-model/text2img, one of its backlinks comes from a comment on https://andrewpoon.org/nyc-meets-ai/the-big-apple-meets-ai. So if you're doing SEO for "text generate image", you can also go there to comment and promote your website.</li>
          <li><strong>Search for corresponding keywords on Google,</strong> see which websites drive traffic to top-ranked competitors, then go to the corresponding websites to determine their backlink methods and create backlinks accordingly.</li>
        </ol>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-5.jpg" alt="Backlink Building Method 1" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-6.jpg" alt="Backlink Building Method 2" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>Future Plans</strong></h2>
        
        <p>For the next month, I'll focus on three key areas:</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Requirement Mining:</strong></h3>
        <p>Expand according to the 3 approaches mentioned above, but need a complete validation system to improve the probability of product success.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Operational Growth:</strong></h3>
        <p>Backlink building is the top priority. Although Google has always emphasized that good products have advantages in its PageRank algorithm, backlinks as a prerequisite for product cold start are crucial. Everyone on the team will spend time on this operational work.</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Claude Code:</strong></h3>
        <p>After using Cursor, I feel that coding has achieved a new paradigm upgrade. But after seeing evaluations of Claude Code, I'm determined to use it as soon as possible to upgrade the entire R&D workflow.</p>
        
        <p>The above is the main summary of this month. Next month, let's continue to work happily!</p>
      `,
      zh: `
        <h1 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>独立开发，不是离开体系，而是重建体系</strong></h1>
        
        <div class="my-8 text-center">
                  <img src="/blog/blog2.jpg" alt="Indie Kickoff第一个月的总结" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <p>从9月20号开始，将主要精力投入做独立开发者，到现在已经过了一个月。</p>
        
        <p>有一个点需要重点提出，自从投入精力到Indie后，发现工作不再内耗，而是非常愉快地、自驱式地去工作。</p>
        
        <p>那么我都做了些什么呢，分三方面展开：</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>学到了什么</strong></h2>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Cursor写代码：</strong></h3>
        <p>之前写代码都是用ChatAI的方式，但这样有个最大的痛点，AI无法拿到你所有的代码，即上下文，导致写的代码，Copy到IDE后，总是需要调试很久，但用了Cursor这个AI Agent后，整体效率提升了几倍。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>一些心法：</strong></h3>
        <p>独立开发者行业的很多前辈总结的心法，之前也都总结过，最重要的一条：<strong>独立开发者的本质是在做软件的生意。</strong>一切以这个来建设吧。</p>
        <p>不要焦虑，要有韧性。</p>
        <p>刷手机改为刷书。</p>
        
        <p>学到的知识实在太多了，那么用它都做了些什么，或者有哪些产出呢？</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>做到了什么</strong></h2>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>产品矩阵：</strong></h3>
        <p>完成了3个站的上线，并有了一定的用户。这个算最有成就的地方吧，当每天看到不断有新用户时，感到写的代码真的有价值了。</p>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-1.jpg" alt="产品矩阵成果" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>知识库创建：</strong></h3>
        <p>使用飞书创建知识库，将体系建设起来。目录结构基本按照软件的开发流程来搭建，围绕产品、研发、运维、运营的工作流来展开。</p>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-2.jpg" alt="知识库结构" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-3.jpg" alt="工作流程" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>代码仓库：</strong></h3>
        <p>使用Github，支持Public和Private，Github自从被微软收购后，基础能力加强了很多，一套自动化的流水线足以支撑小团队的初期了。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>部署平台：</strong></h3>
        <p>选用Vercel，免费的额度足够支撑前期的运营了。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>技术栈选型：</strong></h3>
        <p>前端Next.js, 后端Python，框架选Fastapi。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>需求来自哪里：</strong></h3>
        <p>按照行业内的方法论，主要是3个思路：</p>
        <ol>
          <li><strong>记录生活中的痛点，</strong>主要以自己和周围的人容易抱怨和吐槽的场景为主；</li>
          <li><strong>竞品不足的地方，</strong>去看App Store上的评论，记录用户吐槽和差评的场景；</li>
          <li><strong>关键词的挖掘，</strong>尤其是新词。</li>
        </ol>
        
        <p>思路1和思路3用的比较多，思路2接下来会引入。生活中的痛点已经记录了约54条，在做的需求有5个左右。</p>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-4.jpg" alt="需求挖掘" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <p>关键词挖掘主要依赖的工具是Similarweb、Sermush、Google Trends。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>如何运营：</strong></h3>
        <p>由于主要是要拿Google搜索的排名，因此运营的重点在Google权重高的一些网站，基本梳理出来：Github、知乎、Youtube、Reddit、Twitter，除了Reddit被严格限制外，其它基本已经进入状态。</p>
        
        <p>运营其中一个最重要和基础的点是创建外链。主要两类方法：</p>
        
        <ol>
          <li><strong>在Similarweb或者Sermush上寻找竞品网站的外链来自哪里，</strong>然后对应去创建。比如来自UGC的内容，评论等，对于关键词"text generate image"，Google排名比较靠前的website: https://deepai.org/machine-learning-model/text2img, 它的其中一个反链来自https://andrewpoon.org/nyc-meets-ai/the-big-apple-meets-ai的一个评论，那么如果你在做"text generate image"的SEO，也同样可以去这里进行下评论，推广你的网站。</li>
          <li><strong>Google上搜索对应的关键词，</strong>看排名靠前的竞品会被哪些网站导流，那么到对应的网站上去确定它的外链方式，并对应去创建外链即可。</li>
        </ol>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-5.jpg" alt="外链建设方法1" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <div style="margin: 2rem 0; text-align: center;">
          <img src="/blog/blog2-6.jpg" alt="外链建设方法2" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;"><strong>未来规划</strong></h2>
        
        <p>接下来的一个月，主要是三方面重点投入：</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>需求挖掘：</strong></h3>
        <p>按照上面提到的3个思路去展开，但需要有一套完备的校验体系，这样才能提升产品成功的概率。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>运营增长：</strong></h3>
        <p>外链建设是首当其冲，虽然Google一直强调，好产品在它的PageRank算法中才会有优势，但是外链作为一个产品冷启动的前提，属于重中之重。接下来团队的每个人都会花时间去做这块的运营。</p>
        
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong>Claude Code：</strong></h3>
        <p>用了Cursor之后，觉得写代码已经取得了新范式的升级，但看到对Claude Code的评价后，下决心一定要将其尽快用起来，升级整个研发的工作流。</p>
        
        <p>以上就是这个月的主要总结，下个月我们继续愉快地展开工作吧。</p>
      `
    },
    publishedAt: "2025-10-28T10:00:00Z",
    author: "One Point Star",
    tags: ["indie hacker", "monthly-summary", "product-development", "operational-growth"]
  },
  {
    id: 1,
    title: {
      en: "How Programmers Can Write Code for Themselves",
      zh: "程序员如何为自己写代码"
    },
            image: "/blog/blog1-1.jpg",
    summary: {
      en: "A reflection on the journey from corporate developer to indie hacker, exploring how to find meaning and value in coding by building products that serve real needs and generate sustainable income.",
      zh: "从企业开发者到独立开发者的思考，探索如何通过构建真正有用的产品来找到编程的意义和价值，实现可持续的收入。"
    },
    content: {
      en: `
        <div class="my-8 text-center">
                  <img src="/blog/blog1-1.jpg" alt="Programmer's Time is Limited" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h1 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>Programmer's Time is Limited: Learning to Make Code Work for You is the Greatest Investment</strong></h1>
        
        <p>During the busiest times at Baidu, I often found myself working day and night, ensuring major events and fixing critical online issues.</p>
        
        <p>I remember waking up from a dream one night, sitting on the bed, and suddenly a question popped into my mind: "When will this endless busyness end? Does it even have meaning?"</p>
        
        <p>I wrote a lot of code, but I never actually used the corresponding products, or only used them for testing and validation. Some products were quickly abandoned after launch, too many to count on both hands, so the code I wrote felt worthless.</p>
        
        <p>This question haunted me for a long time, until I finally figured it out recently.</p>
        
        <p><strong>Become an indie hacker, write code to solve real needs in life, rather than experimenting for the company.</strong></p>
        
        <p>This sentence is simple, but how do you actually do it?</p>
        
        <p>If there's no positive feedback, it's hard to persist. Or if there's no income, it's hard to continue.</p>
        
        <p>Now this problem has been solved.</p>
        
        <p>The business model is simple: <strong>Google AdSense and user subscription model.</strong></p>
        
        <p>The rest is just implementation.</p>
        
        <div class="my-8 text-center">
          <img src="/blog/blog1-2.jpg" alt="Indie Hacker Implementation" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <p>The meaning of the above image is very clear and concise: <strong>commercialization is the foundation, without commercialization, nothing can be sustained.</strong></p>
        
        <p><strong>Demand mining and operational growth are the key points.</strong></p>
        
        <div class="my-8 text-center">
          <img src="/blog/blog1-3.jpg" alt="Demand Mining and Operational Growth" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>1) Demand Mining</strong></h2>
        <p>You can mine through Google's new keywords, or through your own and your surroundings' needs. If you can combine the two, that's perfect - this way you don't have to worry about traffic, and you can retain users.</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>2) Operational Growth</strong></h2>
        <ul>
          <li><strong>SEO for websites and web pages:</strong> This is a big subject that requires dedicated topics to explore.</li>
          <li><strong>Social media traffic:</strong> High-weight websites include Reddit, Twitter, ProductHunt, IndieHacker, Zhihu, CSDN, etc.</li>
        </ul>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>3) R&D Implementation</strong></h2>
        <p>N/A. For people with R&D backgrounds, and in the AI era, there are basically no problems, so N/A is sufficient.</p>
        
        <p>From this, we can basically identify that the focus for indie hackers is mainly on <strong>demand mining and operational growth</strong>. So invest the most precious resource that people have: <strong>time and energy</strong> in this, and then achieve the goal mentioned in the title: <strong>write code for yourself, with positive feedback.</strong></p>
      `,
      zh: `
        <div class="my-8 text-center">
                  <img src="/blog/blog1-1.jpg" alt="程序员的时间是有限的" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h1 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>程序员的时间是有限的，学习如何让代码为自己工作，是最大的投资</strong></h1>
        
        <p>曾经在百度工作最忙的时候？经常会没日没夜的加班，保障重大活动、修复线上Case等。</p>
        
        <p>记得有一次，在梦中醒来，坐在床上，突然冒出一个问题，这没日没夜的忙，什么时候是个头？到底有没有意义？</p>
        
        <p>写了很多代码，但自己并没有去用对应的产品，或者说只用它做了测试验证。有些产品上线后，很快会被战略放弃掉，数量拿两只手都数不过来，所以这代码写的感觉很没有价值感。</p>
        
        <p>这个问题萦绕了我很长时间，直到最近终于想明白。</p>
        
        <p><strong>成为独立开发者，写代码做一些生活中真正的需求，而不是为公司去试错。</strong></p>
        
        <p>这句话很简单，但是该如何去做呢？</p>
        
        <p>如果做了没有正反馈，很难坚持下去。或者说，做了没有收入，那么很难坚持。</p>
        
        <p>如今这个问题已解决。</p>
        
        <p>商业模式很简单：<strong>Google AdSense和用户订阅模式。</strong></p>
        
        <p>剩下的就是落地实施了。</p>
        
        <div class="my-8 text-center">
          <img src="/blog/blog1-2.jpg" alt="独立开发者落地实施" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <p>上图的意思非常清晰简洁，<strong>商业化是基础，没有商业化，一切无法持续。</strong></p>
        
        <p><strong>需求挖掘、运营增长是关键点。</strong></p>
        
        <div class="my-8 text-center">
          <img src="/blog/blog1-3.jpg" alt="需求挖掘和运营增长" class="max-w-full h-auto rounded-lg shadow-md mx-auto" style="max-height: 400px;" />
        </div>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>1）需求挖掘：</strong></h2>
        <p>可以通过Google新词去挖掘，可以通过自己和身边的需求去挖掘，如果能将两者结合到一起那最完美，这样既不担心流量，又能让用户留存。</p>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>2）运营增长：</strong></h2>
        <ul>
          <li><strong>SEO 网站和网页：</strong>这是门大学问，需要有专门的课题来探讨。</li>
          <li><strong>通过社交媒体引流，</strong>权重较高的网站包含：reddit、twitter、producthunt、indiehacker、知乎、csdn等。</li>
        </ul>
        
        <h2 style="margin-top: 2rem; margin-bottom: 1.5rem;"><strong>3）研发落地：</strong></h2>
        <p>NA。对于研发出身的人，又身处AI时代，基本没什么问题，所以NA即可。</p>
        
        <p>由此基本可以识别出来，独立开发者的发力点主要在于<strong>需求挖掘和运营增长</strong>，那么就投入人拥有的最宝贵的资源：<strong>时间和精力</strong>在此吧，进而实现标题提到的的目标：<strong>为自己写代码，且有正反馈。</strong></p>
      `
    },
    publishedAt: "2025-10-25T10:00:00Z",
    author: "One Point Star",
    tags: ["indie hacker", "programming", "entrepreneurship", "reflection"]
  }
];

// 博客列表服务端渲染函数，可被页面或组件使用
export async function getBlogPosts(lang: string) {
  const supported = ['en', 'zh'] as const;
  const locale: 'en' | 'zh' = (supported as readonly string[]).includes(lang) ? (lang as 'en' | 'zh') : 'en';
  return blogPosts
    .map(post => ({
    id: post.id,
    title: post.title[locale] || post.title.en,
    summary: post.summary[locale] || post.summary.en,
    content: post.content?.[locale] || post.content?.en,
    image: (post as any).image,
    publishedAt: post.publishedAt,
    author: post.author,
    tags: post.tags,
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// 根据ID获取单篇博客文章
export async function getBlogPost(id: number, lang: string) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return null;
  const supported = ['en', 'zh'] as const;
  const locale: 'en' | 'zh' = (supported as readonly string[]).includes(lang) ? (lang as 'en' | 'zh') : 'en';
  return {
    id: post.id,
    title: post.title[locale] || post.title.en,
    summary: post.summary[locale] || post.summary.en,
    content: post.content?.[locale] || post.content?.en,
    image: (post as any).image,
    publishedAt: post.publishedAt,
    author: post.author,
    tags: post.tags,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageTracking />
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-3 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Logo className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" lang={lang} />
                <Link href={`/${lang}`} className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                  {t.title}
                </Link>
              </div>
              <nav className="flex flex-wrap gap-1 sm:gap-2 lg:gap-6">
                <Link
                  href={`/${lang}`}
                  className="text-xs sm:text-sm lg:text-base text-blue-600 font-medium px-2 py-1 rounded hover:bg-blue-50"
                >
                  {t.homeTab}
                </Link>
                <Link
                  href={`/${lang}/blog`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.blogTab}
                </Link>
                <Link
                  href={`/${lang}/tools`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.relatedToolsTitle}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.aboutTab}
                </Link>
              </nav>
            </div>
            <div className="flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-1 w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {/* 英雄区域 */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              {lang === 'zh' ? '独立开发者全球聚集地' : 'The Global Hub for Indie Hackers'}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href={`/${lang}/blog`}
                className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
              >
                {lang === 'zh' ? '阅读博客' : 'Read Blog'}
              </Link>
              <Link
                href={`/${lang}/tools`}
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base"
              >
                {lang === 'zh' ? '探索工具' : 'Explore Tools'}
              </Link>
            </div>
          </div>


          {/* 特色区域 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌍</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t.feature1Title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.feature1Description}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t.feature2Title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.feature2Description}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t.feature3Title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.feature3Description}</p>
            </div>
          </div>

          {/* 最新博客文章 */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {lang === 'zh' ? '最新文章' : 'Latest Article'}
            </h2>
            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {lang === 'zh' ? '独立开发者构建第一个SaaS产品的完整指南' : 'The Complete Guide to Building Your First SaaS Product as an Indie Hacker'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {lang === 'zh' ? '学习作为独立开发者构建和发布第一个SaaS产品的基本步骤。从想法验证到部署，发现成功独立开发者使用的工具和策略。' : 'Learn the essential steps to build and launch your first SaaS product as an indie hacker. From idea validation to deployment, discover the tools and strategies that successful indie developers use.'}
              </p>
              <Link
                href={`/${lang}/blog`}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
              >
                {lang === 'zh' ? '阅读更多 →' : 'Read More →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer lang={lang} t={t} />
    </div>
  );
}