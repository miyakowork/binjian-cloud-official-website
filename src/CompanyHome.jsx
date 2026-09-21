import { useRef, useState } from "react";
import { ArrowRightOutlined, ArrowDownOutlined, MenuOutlined, CloseOutlined, SafetyCertificateOutlined, ApiOutlined, ApartmentOutlined, SettingOutlined, MonitorOutlined, CheckOutlined, DownloadOutlined } from "@ant-design/icons";
import "./company-home.css";

const capabilities = [
  { name: "让团队协作更顺畅", tag: "协作更顺畅", icon: SafetyCertificateOutlined, text: "不同岗位各司其职，日常工作在一个平台有序开展。减少反复沟通，让管理更清楚、协作更省心。", detail: "分工清晰 · 信息有序 · 管理省心", module: "团队协作" },
  { name: "让好想法更快落地", tag: "落地更高效", icon: ApiOutlined, text: "以成熟能力承接常见需求，把更多时间用于打磨你的专属体验。减少重复建设，让产品更快走向使用。", detail: "成熟能力 · 按需定制 · 减少重复投入", module: "产品定制" },
  { name: "让业务增长更从容", tag: "增长更从容", icon: ApartmentOutlined, text: "从一个团队到多个分支，让不同业务各自有序、整体协同。企业向前发展，产品也能跟上新的需求。", detail: "多团队管理 · 信息分开 · 按需扩展", module: "业务成长" },
  { name: "让长期使用更安心", tag: "使用更安心", icon: MonitorOutlined, text: "从使用记录到日常检查，让重要操作可回看、运行问题有线索。关注上线的那一天，也关注往后的每一天。", detail: "过程可追溯 · 运行可检查 · 持续改进", module: "品质保障" },
];
const scenarios = [
  { title: "把想法做成好产品", subtitle: "从一个想法，到真正用得起来", text: "你提供业务目标，我们帮助梳理使用场景、设计产品体验，再分阶段实现。从企业内部管理到面向客户的服务，让投入聚焦真正需要的功能。", features: ["贴合实际业务", "易懂易用的体验", "阶段成果可确认"], code: "01 / 新产品建设" },
  { title: "让现有产品更好用", subtitle: "保留积累，让新的需求有处可落", text: "先找出影响效率和体验的环节，再有计划地改进。让分散的工作更连贯，让已有投入继续发挥价值。", features: ["找准使用痛点", "减少重复操作", "分阶段改进验证"], code: "02 / 产品升级" },
  { title: "打造企业专属平台", subtitle: "贴合你的管理方式与使用要求", text: "按企业要求安排产品的安装、使用与管理，明确资料归属、使用范围和维护方式，让交付后的日常使用更有章法。", features: ["企业专属平台", "按企业要求交付", "上线检查与使用支持"], code: "03 / 专属平台" },
];

function SectionTitle({ number, label, children, text }) {
  return <div className="bc-section-title"><p className="bc-kicker">{number} / {label}</p><h2>{children}</h2>{text && <p>{text}</p>}</div>;
}

export function CompanyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scenario, setScenario] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const dialog = useRef(null);
  const opener = useRef(null);
  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); };
  const openBrief = (event) => { opener.current = event.currentTarget; setDownloaded(false); dialog.current.showModal(); };
  const downloadBrief = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const content = `彬剑云 · 项目需求清单\n\n项目方向：${data.get("type")}\n业务目标：${data.get("goal")}\n当前系统：${data.get("current")}\n期望时间：${data.get("time")}\n\n讨论要点：想解决的问题、使用人群、优先功能、期望时间、验收标准。\n`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "彬剑云-项目需求清单.txt"; link.click(); window.setTimeout(() => URL.revokeObjectURL(url), 1000); setDownloaded(true);
  };
  const active = scenarios[scenario];
  return <div className="bc-site">
    <a className="bc-skip" href="#bc-main">跳到正文</a>
    <header className="bc-header">
      <a className="bc-brand" href="#/" aria-label="彬剑云首页" onClick={()=>{setMenuOpen(false);window.scrollTo({top:0,behavior:"instant"});}}><img src="./brand/binbot-icon.svg" alt=""/><span>彬剑云<small>BINJIAN CLOUD</small></span></a>
      <nav className={menuOpen ? "bc-nav is-open" : "bc-nav"} aria-label="网站导航" id="bc-navigation">
        {[["bc-capabilities", "产品能力"], ["bc-foundation", "交付优势"], ["bc-solutions", "解决方案"], ["bc-about", "关于我们"]].map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
      </nav>
      <button className="bc-header-action" onClick={() => go("bc-contact")}>聊聊你的项目 <ArrowRightOutlined aria-hidden="true"/></button>
      <button className="bc-menu" aria-label={menuOpen ? "关闭导航" : "打开导航"} aria-expanded={menuOpen} aria-controls="bc-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseOutlined/> : <MenuOutlined/>}</button>
    </header>
    <main id="bc-main">
      <section className="bc-hero">
        <div className="bc-hero-copy"><p className="bc-kicker"><span className="bc-dot"/> 从业务想法，到产品落地</p><h1>让你的想法<br/>更快成为<span>好产品。</span></h1><p className="bc-lead">把复杂的需求，做成清晰、好用的产品。<br/>更高效地实现，更扎实地交付，陪伴业务持续成长。</p><div className="bc-actions"><button className="bc-primary" onClick={() => go("bc-capabilities")}>看看我们能做什么 <ArrowRightOutlined aria-hidden="true"/></button><button className="bc-text-button" onClick={() => go("bc-solutions")}>找到适合你的方案 <ArrowDownOutlined aria-hidden="true"/></button></div><div className="bc-hero-notes"><span><CheckOutlined/> 高效实现</span><span><CheckOutlined/> 品质交付</span><span><CheckOutlined/> 持续成长</span></div></div>
        <div className="bc-foundation-card" aria-label="从需求到交付的产品服务">
          <div className="bc-card-top"><span>你的产品，我们一起实现</span><span className="bc-card-index">全程协同</span></div>
          <div className="bc-platform-brand"><img src="./brand/binbot-lockup-inverse.svg" alt="BinBot"/><p>成熟能力，加上属于你的独特想法。</p></div>
          <div className="bc-app-layer"><span>企业内部管理</span><span>客户服务平台</span><span>专属业务工具</span></div>
          <div className="bc-gateway"><ApiOutlined aria-hidden="true"/><div><strong>从你的需求出发</strong><span>理解目标 · 打磨体验 · 实现功能</span></div><ArrowDownOutlined aria-hidden="true"/></div>
          <div className="bc-core-modules">{[[SafetyCertificateOutlined,"质量把关","每阶段可检验"],[SettingOutlined,"灵活定制","贴合业务需要"],[MonitorOutlined,"长期好用","伴随业务成长"]].map(([Icon,name,text])=><div key={name}><Icon aria-hidden="true"/><strong>{name}</strong><span>{text}</span></div>)}</div>
          <div className="bc-base-layer"><span>成熟能力，减少重复建设</span><p>把更多时间，留给产品的独特价值</p></div>
          <div className="bc-card-bottom"><span className="bc-dot"/> 从想法到使用，关注每一步的价值 <span>→</span></div>
        </div>
      </section>
      <div className="bc-principles"><p>把复杂交给我们，<br/><strong>把精力留给业务。</strong></p><span>目标先明确</span><span>过程看得见</span><span>成果可检验</span><span>产品用得久</span></div>
      <section className="bc-section" id="bc-capabilities"><SectionTitle number="01" label="我们能为你做什么" text="把成熟的产品能力与真实业务结合，既减少重复投入，也为你的独特需求留足空间。">少一些重复投入，<br className="bc-mobile-break"/>多一些产品价值。</SectionTitle><div className="bc-capabilities">{capabilities.map(({name,tag,icon:Icon,text,detail,module},i)=><article key={name}><div className="bc-cap-top"><Icon aria-hidden="true"/><span>0{i+1} / {tag}</span></div><h3>{name}</h3><p>{text}</p><div className="bc-cap-detail">{detail}</div><span className="bc-module-name">{module}</span></article>)}</div></section>
      <section className="bc-foundation-section" id="bc-foundation"><div className="bc-section bc-foundation-inner"><SectionTitle number="02" label="为什么选择彬剑云" text="效率来自成熟积累，质量来自过程把关。把常见需求做得更扎实，把定制精力用在决定产品价值的地方。">好产品，<br/>既要快，也要经得起用。</SectionTitle><div className="bc-stack"><div><span>更懂你</span><strong>先理解业务，再设计产品</strong><small>围绕真实使用场景，让功能服务于目标</small></div><div><span>更高效</span><strong>成熟能力，让建设少走弯路</strong><small>减少重复工作，把时间用在关键体验上</small></div><div><span>更扎实</span><strong>阶段确认，让交付有据可验</strong><small>及时查看成果、校准方向，减少后期返工</small></div></div><div className="bc-tech-labels"><span>需求梳理</span><span>体验设计</span><span>产品实现</span><span>质量检查</span><span>上线交付</span><span>持续完善</span></div></div></section>
      <section className="bc-section" id="bc-solutions"><SectionTitle number="03" label="找到你的建设方向" text="无论是实现一个新想法，还是让现有产品更进一步，都从你的实际目标出发。">不一样的起点，<br/>同样扎实的交付。</SectionTitle><div className="bc-scenario-tabs" role="tablist" aria-label="项目建设方向">{["新产品建设","现有产品升级","企业专属平台"].map((name,i)=><button role="tab" id={`bc-tab-${i}`} aria-controls="bc-scenario-panel" aria-selected={scenario===i} tabIndex={scenario===i?0:-1} key={name} onClick={()=>setScenario(i)} onKeyDown={e=>{if(["ArrowRight","ArrowLeft","Home","End"].includes(e.key)){e.preventDefault();const next=e.key==="Home"?0:e.key==="End"?2:(i+(e.key==="ArrowRight"?1:2))%3;setScenario(next);document.getElementById(`bc-tab-${next}`)?.focus();}}}>{name}</button>)}</div><div className="bc-scenario-panel" id="bc-scenario-panel" role="tabpanel" aria-labelledby={`bc-tab-${scenario}`}><div><p className="bc-kicker">{active.code}</p><h3>{active.title}</h3><p className="bc-scenario-subtitle">{active.subtitle}</p><p>{active.text}</p><button className="bc-text-button" onClick={openBrief}>整理我的项目需求 <ArrowRightOutlined aria-hidden="true"/></button></div><ul>{active.features.map((feature,i)=><li key={feature}><span>0{i+1}</span>{feature}<CheckOutlined aria-hidden="true"/></li>)}</ul></div></section>
      <section className="bc-delivery"><div className="bc-section"><SectionTitle number="04" label="看得见的交付过程" text="让目标、进度和成果都有共识，减少猜测与等待，让产品一步步接近你的期待。">从想法到上线，<br/>每一步都算数。</SectionTitle><ol>{[["理解业务","先聊清楚为谁服务、解决什么问题、哪些需求最重要。"],["先看再打磨","通过设计和阶段演示尽早看见成果，及时调整方向。"],["检查再交付","对照约定逐项检查功能与体验，让交付结果有据可验。"],["越用越贴合","结合实际使用反馈持续改进，让产品跟得上业务变化。"]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
      <section className="bc-section bc-about" id="bc-about"><div><p className="bc-kicker">关于彬剑云</p><h2>把你的目标，<br/>做成看得见的价值。</h2></div><div><h3>彬剑云信息技术有限公司</h3><p>彬剑云信息技术有限公司，为企业提供从需求梳理、产品设计到建设交付的服务，让好的业务想法更高效地成为可用的产品。</p><p>我们相信，好的交付不只是完成一份功能清单，更是让产品融入日常工作、帮助团队提升效率，并为下一步发展留出空间。</p><span className="bc-about-sign">认真理解每一个需求，扎实完成每一次交付。</span></div></section>
      <section className="bc-contact" id="bc-contact"><div><p className="bc-kicker">你的下一步，从这里开始</p><h2>下一步，<br/>从你的业务开始。</h2><p>你不需要懂技术，只需要说清想解决的问题。<br/>先整理目标，让下一次沟通更有方向。</p></div><button className="bc-primary bc-white" onClick={openBrief}>整理项目需求 <ArrowRightOutlined aria-hidden="true"/></button></section>
    </main>
    <footer className="bc-footer"><div><img src="./brand/binbot-lockup.svg" alt="BinBot"/><span>彬剑云信息技术有限公司</span></div><p>© {new Date().getFullYear()} 彬剑云 · 让你的想法，更快成为好产品</p></footer>
    <div className="bc-mobile-bar"><button onClick={()=>go("bc-capabilities")}>产品能力</button><button onClick={()=>go("bc-contact")}>聊聊项目 <ArrowRightOutlined aria-hidden="true"/></button></div>
    <dialog className="bc-dialog" ref={dialog} onClose={()=>opener.current?.focus()} onClick={event=>{if(event.target===dialog.current)dialog.current.close();}}><div className="bc-dialog-inner"><button className="bc-dialog-close" aria-label="关闭需求清单" onClick={()=>dialog.current.close()}><CloseOutlined/></button><p className="bc-kicker">聊聊你的产品想法</p><h2>先把想法整理清楚。</h2><p>填写后可下载需求清单，留作后续沟通使用。内容只用于生成下载文件，不会自动发送给我们。</p><form onSubmit={downloadBrief}><label>项目方向<select name="type" defaultValue={scenarios[scenario].title}>{scenarios.map(item=><option key={item.title}>{item.title}</option>)}</select></label><label>希望解决什么问题？<textarea name="goal" required maxLength={1500} rows={3} placeholder="例如：让门店订单集中管理，减少员工重复录入"/></label><label>当前系统情况<input name="current" maxLength={300} placeholder="是否已有系统、主要使用人员等"/></label><label>期望启动或上线时间<input name="time" maxLength={100} placeholder="例如：计划下季度启动"/></label><button className="bc-primary" type="submit"><DownloadOutlined aria-hidden="true"/> 下载需求清单</button><p className="bc-download-status" role="status">{downloaded?"需求清单已生成，请查看浏览器下载记录。":""}</p></form></div></dialog>
  </div>;
}
