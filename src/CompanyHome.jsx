import { useRef, useState } from "react";
import { ArrowRightOutlined, ArrowDownOutlined, MenuOutlined, CloseOutlined, SafetyCertificateOutlined, ApiOutlined, ApartmentOutlined, SettingOutlined, MonitorOutlined, CheckOutlined, DownloadOutlined } from "@ant-design/icons";
import "./company-home.css";

const capabilities = [
  { name: "统一身份与权限", tag: "IDENTITY", icon: SafetyCertificateOutlined, text: "把用户、组织、角色和菜单纳入统一体系，让每一个业务入口都有清晰的访问边界。", detail: "会话认证 · 角色授权 · 菜单权限 · 数据权限", module: "UBS" },
  { name: "业务接入与路由", tag: "CONNECTIVITY", icon: ApiOutlined, text: "通过统一网关与 RPC 契约连接业务服务，让新能力以一致的方式被发现、授权和调用。", detail: "统一入口 · 动态路由 · 权限注册 · RPC 契约", module: "Gateway" },
  { name: "多租户业务隔离", tag: "WORKSPACE", icon: ApartmentOutlined, text: "在共用的基础能力之上，为不同业务空间建立数据边界，支撑多组织场景持续扩展。", detail: "租户上下文 · 数据隔离 · 组织管理", module: "Foundation" },
  { name: "配置与运行治理", tag: "OPERATIONS", icon: MonitorOutlined, text: "把配置、操作审计、日志和健康检查带入日常运行，让系统上线后的问题有迹可循。", detail: "配置管理 · 操作审计 · 运行日志 · 健康检查", module: "Config / OPS" },
];
const scenarios = [
  { title: "从零建设业务系统", subtitle: "把时间留给真正的业务创新", text: "从组织、权限、配置等共性需求起步，在统一底座上实现业务流程与管理工作台。", features: ["统一管理后台", "模块化业务研发", "角色与数据边界"], code: "01 / BUILD" },
  { title: "升级已有业务平台", subtitle: "让系统跟上业务发展的节奏", text: "梳理现有接口与系统边界，逐步整合身份、权限和服务入口，减少重复建设。", features: ["现状梳理与架构评估", "服务接入与能力整合", "分阶段迁移验证"], code: "02 / EVOLVE" },
  { title: "交付自主可控的环境", subtitle: "让运行环境掌握在自己手中", text: "围绕企业自己的环境组织配置、部署和数据库迁移，让交付结果可以验证、可以维护。", features: ["私有化部署", "多环境配置", "上线验证与运行支持"], code: "03 / DEPLOY" },
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
    const content = `彬剑云 · 项目需求清单\n\n项目方向：${data.get("type")}\n业务目标：${data.get("goal")}\n当前系统：${data.get("current")}\n期望时间：${data.get("time")}\n\n讨论要点：业务流程、使用角色、数据范围、部署环境、验收标准。\n`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "彬剑云-项目需求清单.txt"; link.click(); window.setTimeout(() => URL.revokeObjectURL(url), 1000); setDownloaded(true);
  };
  const active = scenarios[scenario];
  return <div className="bc-site">
    <a className="bc-skip" href="#bc-main">跳到正文</a>
    <header className="bc-header">
      <a className="bc-brand" href="#/" aria-label="彬剑云首页" onClick={()=>{setMenuOpen(false);window.scrollTo({top:0,behavior:"instant"});}}><img src="./brand/binbot-icon.svg" alt=""/><span>彬剑云<small>BINJIAN CLOUD</small></span></a>
      <nav className={menuOpen ? "bc-nav is-open" : "bc-nav"} aria-label="网站导航" id="bc-navigation">
        {[["bc-capabilities", "产品能力"], ["bc-foundation", "技术底座"], ["bc-solutions", "解决方案"], ["bc-about", "关于我们"]].map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
      </nav>
      <button className="bc-header-action" onClick={() => go("bc-contact")}>聊聊你的项目 <ArrowRightOutlined aria-hidden="true"/></button>
      <button className="bc-menu" aria-label={menuOpen ? "关闭导航" : "打开导航"} aria-expanded={menuOpen} aria-controls="bc-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseOutlined/> : <MenuOutlined/>}</button>
    </header>
    <main id="bc-main">
      <section className="bc-hero">
        <div className="bc-hero-copy"><p className="bc-kicker"><span className="bc-dot"/> BUILT ON BINBOT FOUNDATION</p><h1>让业务创新<br/>拥有<span>可靠底座。</span></h1><p className="bc-lead">从统一基础能力，到业务系统交付。<br/>彬剑云让复杂的数字化建设，有清晰的起点。</p><div className="bc-actions"><button className="bc-primary" onClick={() => go("bc-capabilities")}>探索产品能力 <ArrowRightOutlined aria-hidden="true"/></button><button className="bc-text-button" onClick={() => go("bc-solutions")}>找到适合你的方案 <ArrowDownOutlined aria-hidden="true"/></button></div><div className="bc-hero-notes"><span><CheckOutlined/> 模块化架构</span><span><CheckOutlined/> 私有化交付</span><span><CheckOutlined/> 持续演进</span></div></div>
        <div className="bc-foundation-card" aria-label="BinBot Foundation 能力架构">
          <div className="bc-card-top"><span>FOUNDATION / 能力架构</span><span className="bc-card-index">01—05</span></div>
          <div className="bc-platform-brand"><img src="./brand/binbot-lockup-inverse.svg" alt="BinBot"/><p>让共性能力，成为业务的起点。</p></div>
          <div className="bc-app-layer"><span>企业管理应用</span><span>客户服务应用</span><span>行业业务模块</span></div>
          <div className="bc-gateway"><ApiOutlined aria-hidden="true"/><div><strong>统一服务入口</strong><span>Gateway · 认证 / 路由 / 接入</span></div><ArrowDownOutlined aria-hidden="true"/></div>
          <div className="bc-core-modules">{[[SafetyCertificateOutlined,"UBS","身份与权限"],[SettingOutlined,"Config","配置管理"],[MonitorOutlined,"OPS","运行治理"]].map(([Icon,name,text])=><div key={name}><Icon aria-hidden="true"/><strong>{name}</strong><span>{text}</span></div>)}</div>
          <div className="bc-base-layer"><span>BINBOT KITS</span><p>日志 · 校验 · RPC · 文件 · 健康检查</p></div>
          <div className="bc-card-bottom"><span className="bc-dot"/> 从基础能力，连接业务价值 <span>→</span></div>
        </div>
      </section>
      <div className="bc-principles"><p>复杂留给架构，<br/><strong>简单留给业务。</strong></p><span>统一标准</span><span>清晰边界</span><span>可验证交付</span><span>可持续运行</span></div>
      <section className="bc-section" id="bc-capabilities"><SectionTitle number="01" label="CAPABILITIES" text="把反复建设的共性能力沉淀下来，让每一个新业务从更成熟的起点出发。">你的业务，<br className="bc-mobile-break"/>不必每次从零开始。</SectionTitle><div className="bc-capabilities">{capabilities.map(({name,tag,icon:Icon,text,detail,module},i)=><article key={name}><div className="bc-cap-top"><Icon aria-hidden="true"/><span>0{i+1} / {tag}</span></div><h3>{name}</h3><p>{text}</p><div className="bc-cap-detail">{detail}</div><span className="bc-module-name">{module}</span></article>)}</div></section>
      <section className="bc-foundation-section" id="bc-foundation"><div className="bc-section bc-foundation-inner"><SectionTitle number="02" label="THE FOUNDATION" text="BinBot Foundation 将网关、平台服务和业务模块分层组织。基础能力统一沉淀，业务能力按需扩展。">一个底座，<br/>接住下一次业务增长。</SectionTitle><div className="bc-stack"><div><span>应用层</span><strong>管理端 / 客户端 / 业务应用</strong><small>面向不同角色，承接具体业务流程</small></div><div><span>服务层</span><strong>Gateway + UBS + Config + OPS</strong><small>统一接入、身份、配置与运行治理</small></div><div><span>工程层</span><strong>BinBot Kits + 交付工具</strong><small>公共组件、环境配置与数据库迁移</small></div></div><div className="bc-tech-labels"><span>Java 17</span><span>Spring Boot</span><span>Dubbo</span><span>React</span><span>MySQL</span><span>Redis</span></div></div></section>
      <section className="bc-section" id="bc-solutions"><SectionTitle number="03" label="SOLUTIONS" text="从你的业务阶段出发，选择合适的建设路径。">不一样的起点，<br/>同样扎实的交付。</SectionTitle><div className="bc-scenario-tabs" role="tablist" aria-label="项目建设方向">{["新系统建设","已有系统升级","私有化部署"].map((name,i)=><button role="tab" id={`bc-tab-${i}`} aria-controls="bc-scenario-panel" aria-selected={scenario===i} tabIndex={scenario===i?0:-1} key={name} onClick={()=>setScenario(i)} onKeyDown={e=>{if(["ArrowRight","ArrowLeft","Home","End"].includes(e.key)){e.preventDefault();const next=e.key==="Home"?0:e.key==="End"?2:(i+(e.key==="ArrowRight"?1:2))%3;setScenario(next);document.getElementById(`bc-tab-${next}`)?.focus();}}}>{name}</button>)}</div><div className="bc-scenario-panel" id="bc-scenario-panel" role="tabpanel" aria-labelledby={`bc-tab-${scenario}`}><div><p className="bc-kicker">{active.code}</p><h3>{active.title}</h3><p className="bc-scenario-subtitle">{active.subtitle}</p><p>{active.text}</p><button className="bc-text-button" onClick={openBrief}>整理我的项目需求 <ArrowRightOutlined aria-hidden="true"/></button></div><ul>{active.features.map((feature,i)=><li key={feature}><span>0{i+1}</span>{feature}<CheckOutlined aria-hidden="true"/></li>)}</ul></div></section>
      <section className="bc-delivery"><div className="bc-section"><SectionTitle number="04" label="DELIVERY" text="每一步都明确目标，每一阶段都有可以讨论和验证的结果。">从想法到上线，<br/>每一步都算数。</SectionTitle><ol>{[["理解业务","梳理角色、流程、数据和目标，明确建设边界。"],["设计与研发","确定模块和契约，通过可演示版本逐步验证。"],["部署与验收","准备环境、迁移数据，对照业务目标完成验收。"],["运行与演进","结合日志与反馈，持续完善系统运行和使用体验。"]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
      <section className="bc-section bc-about" id="bc-about"><div><p className="bc-kicker">ABOUT BINJIAN CLOUD</p><h2>技术扎根，<br/>业务生长。</h2></div><div><h3>彬剑云信息技术有限公司</h3><p>我们围绕企业数字化系统建设，将 BinBot Foundation 的基础能力、业务研发与私有化交付连接起来。</p><p>关注系统如何建起来，也关注它如何稳定运行、如何跟随业务持续演进。从一个清晰的问题出发，交付一套真正适用的系统。</p><span className="bc-about-sign">ENGINEERING WITH PURPOSE.</span></div></section>
      <section className="bc-contact" id="bc-contact"><div><p className="bc-kicker">LET’S BUILD SOMETHING THAT LASTS</p><h2>下一步，<br/>从你的业务开始。</h2><p>新建系统、升级平台，或准备私有化部署。<br/>先整理目标，让下一次沟通更有方向。</p></div><button className="bc-primary bc-white" onClick={openBrief}>整理项目需求 <ArrowRightOutlined aria-hidden="true"/></button></section>
    </main>
    <footer className="bc-footer"><div><img src="./brand/binbot-lockup.svg" alt="BinBot"/><span>彬剑云信息技术有限公司</span></div><p>© {new Date().getFullYear()} 彬剑云 · 让业务创新拥有可靠底座</p></footer>
    <div className="bc-mobile-bar"><button onClick={()=>go("bc-capabilities")}>产品能力</button><button onClick={()=>go("bc-contact")}>聊聊项目 <ArrowRightOutlined aria-hidden="true"/></button></div>
    <dialog className="bc-dialog" ref={dialog} onClose={()=>opener.current?.focus()} onClick={event=>{if(event.target===dialog.current)dialog.current.close();}}><div className="bc-dialog-inner"><button className="bc-dialog-close" aria-label="关闭需求清单" onClick={()=>dialog.current.close()}><CloseOutlined/></button><p className="bc-kicker">PROJECT BRIEF</p><h2>先把想法整理清楚。</h2><p>填写后可下载需求清单，留作后续沟通使用。内容仅在本机生成，不会提交到服务器。</p><form onSubmit={downloadBrief}><label>项目方向<select name="type" defaultValue={scenarios[scenario].title}>{scenarios.map(item=><option key={item.title}>{item.title}</option>)}</select></label><label>希望解决什么问题？<textarea name="goal" required maxLength={1500} rows={3} placeholder="例如：统一多个业务系统的用户与权限"/></label><label>当前系统情况<input name="current" maxLength={300} placeholder="是否已有系统、主要使用人员等"/></label><label>期望启动或上线时间<input name="time" maxLength={100} placeholder="例如：计划下季度启动"/></label><button className="bc-primary" type="submit"><DownloadOutlined aria-hidden="true"/> 下载需求清单</button><p className="bc-download-status" role="status">{downloaded?"需求清单已生成，请查看浏览器下载记录。":""}</p></form></div></dialog>
  </div>;
}
