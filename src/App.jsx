import { useEffect, useRef, useState } from "react";
import {
  ApartmentOutlined,
  ApiOutlined,
  AppstoreOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BarsOutlined,
  BuildOutlined,
  CheckCircleFilled,
  CheckOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  GlobalOutlined,
  HddOutlined,
  LockOutlined,
  MenuOutlined,
  MonitorOutlined,
  NodeIndexOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  SendOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const COMPANY_NAME = "彬剑云信息技术有限公司";

const PAGE_META = {
  "/": { title: "三套官网设计｜彬剑云信息技术有限公司" },
  "/deep-infrastructure": { title: "深海核心｜彬剑云信息技术有限公司" },
  "/cloud-editorial": { title: "云端编辑｜彬剑云信息技术有限公司" },
  "/engineering-delivery": { title: "工程交付｜彬剑云信息技术有限公司" },
};

const DESIGNS = [
  {
    path: "/deep-infrastructure",
    name: "深海核心",
    english: "Deep Infrastructure",
    image: "/references/deep-infrastructure.png",
    summary: "以架构核心为主角，强调 BinBot Foundation 的平台能力与技术可信度。",
    tone: "深色 / 架构感 / 技术决策者",
  },
  {
    path: "/cloud-editorial",
    name: "云端编辑",
    english: "Cloud Editorial",
    image: "/references/cloud-editorial.png",
    summary: "以真实产品界面建立信任，表达清晰、明亮，适合企业客户快速理解。",
    tone: "明亮 / 产品化 / 商务沟通",
  },
  {
    path: "/engineering-delivery",
    name: "工程交付",
    english: "Engineering Delivery",
    image: "/references/engineering-delivery.png",
    summary: "以完整交付路径为叙事中心，突出从需求到长期运维的一体化能力。",
    tone: "工程 / 流程感 / 项目负责人",
  },
];

const CAPABILITIES = [
  {
    icon: <ApartmentOutlined />,
    title: "企业级架构底座",
    description: "覆盖统一网关、身份认证、组织角色、菜单权限、数据权限与业务空间管理。",
  },
  {
    icon: <ApiOutlined />,
    title: "业务快速接入",
    description: "通过 Biz Starter、统一 RPC 契约和模块化能力，让新业务更快进入可运行状态。",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "安全隔离与治理",
    description: "请求入口业务空间校验、细粒度权限、上下文透传、操作审计与异常治理。",
  },
  {
    icon: <CloudServerOutlined />,
    title: "部署与运行闭环",
    description: "支持多环境配置、数据库迁移、配置发布、部署流水线、健康检查和运行日志。",
  },
];

const SOLUTIONS = [
  { icon: <DesktopOutlined />, title: "企业综合管理平台", text: "统一承载组织、用户、权限、配置与业务工作台。" },
  { icon: <ShopOutlined />, title: "多组织业务平台", text: "面向集团、园区和多主体场景建立清晰的数据边界。" },
  { icon: <AppstoreOutlined />, title: "管理端与客户应用", text: "一套工程标准支撑管理后台和客户服务应用协同交付。" },
  { icon: <ToolOutlined />, title: "系统升级与私有部署", text: "让既有系统逐步完成架构治理、迁移和可观测运行。" },
];

const DELIVERY_STEPS = [
  { number: "01", icon: <BarsOutlined />, title: "需求梳理", text: "明确流程、角色、数据来源和验收边界。" },
  { number: "02", icon: <ApartmentOutlined />, title: "架构落位", text: "完成模块拆分、技术方案和风险预判。" },
  { number: "03", icon: <CodeOutlined />, title: "业务研发", text: "用可演示版本持续校准功能与体验。" },
  { number: "04", icon: <DeploymentUnitOutlined />, title: "部署迁移", text: "完成环境准备、数据迁移与上线验证。" },
  { number: "05", icon: <MonitorOutlined />, title: "持续运维", text: "以监控、日志和迭代机制保障长期运行。" },
];

const ARCHITECTURE_NODES = [
  { label: "Gateway", icon: <GlobalOutlined /> },
  { label: "UBS", icon: <SafetyCertificateOutlined /> },
  { label: "Config", icon: <SettingOutlined /> },
  { label: "OPS", icon: <MonitorOutlined /> },
  { label: "Biz Starter", icon: <BuildOutlined /> },
];

function getPathFromHash() {
  const raw = window.location.hash.replace(/^#/, "");
  return PAGE_META[raw] ? raw : "/";
}

function useHashRoute() {
  const [path, setPath] = useState(getPathFromHash);

  useEffect(() => {
    const handleChange = () => {
      setPath(getPathFromHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", handleChange);
    if (!window.location.hash) window.history.replaceState(null, "", "#/");
    return () => window.removeEventListener("hashchange", handleChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_META[path]?.title ?? PAGE_META["/"].title;
  }, [path]);

  return path;
}

function goTo(path) {
  window.location.hash = `#${path}`;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Brand({ inverse = false, companyOnly = false }) {
  if (companyOnly) {
    return (
      <button className="company-brand" type="button" onClick={() => goTo("/")} aria-label="返回方案总览">
        <img src={inverse ? "/brand/binbot-icon-inverse.svg" : "/brand/binbot-icon.svg"} alt="" />
        <span>{COMPANY_NAME}</span>
      </button>
    );
  }

  return (
    <button className="brand-lockup" type="button" onClick={() => goTo("/")} aria-label="返回方案总览">
      <span>{COMPANY_NAME.replace("有限公司", "")}</span>
      <span className="brand-divider" aria-hidden="true" />
      <img src={inverse ? "/brand/binbot-lockup-inverse.svg" : "/brand/binbot-lockup.svg"} alt="BinBot" />
    </button>
  );
}

function Header({ variant, onConsult }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const inverse = variant === "deep" || variant === "engineering";
  const companyOnly = variant === "engineering";

  const navigate = (id) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`site-header site-header--${variant}`}>
      <Brand inverse={inverse} companyOnly={companyOnly} />
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={mobileOpen ? "关闭导航" : "打开导航"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((value) => !value)}
      >
        {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>
      <nav className={mobileOpen ? "header-nav is-open" : "header-nav"} aria-label="官网主导航">
        <button type="button" onClick={() => navigate("capabilities")}>产品能力</button>
        <button type="button" onClick={() => navigate("solutions")}>解决方案</button>
        <button type="button" onClick={() => navigate("delivery")}>交付服务</button>
        <button type="button" onClick={() => navigate("about")}>关于我们</button>
      </nav>
      <button className="header-cta" type="button" onClick={onConsult}>
        {variant === "engineering" ? "发起项目评估" : "预约方案评估"}
        {variant === "engineering" ? <ArrowRightOutlined /> : null}
      </button>
    </header>
  );
}

function DesignSwitcher() {
  return (
    <aside className="design-switcher" aria-label="切换官网设计方案">
      <button type="button" onClick={() => goTo("/")} aria-label="返回方案总览"><ArrowLeftOutlined /></button>
      {DESIGNS.map((design, index) => (
        <button key={design.path} type="button" onClick={() => goTo(design.path)} aria-label={`查看方案 ${index + 1}：${design.name}`}>{index + 1}</button>
      ))}
    </aside>
  );
}

function ConsultationModal({ open, onClose }) {
  const [projectType, setProjectType] = useState("建设新系统");
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const preferredType = window.sessionStorage.getItem("binjian-project-type");
    if (preferredType) {
      setProjectType(preferredType);
      window.sessionStorage.removeItem("binjian-project-type");
    }
    document.body.classList.add("modal-open");
    const timer = window.setTimeout(() => dialogRef.current?.focus(), 20);
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" tabIndex="-1" ref={dialogRef}>
        <button className="modal-close" type="button" onClick={close} aria-label="关闭项目评估表单"><CloseOutlined /></button>
        {submitted ? (
          <div className="consultation-success">
            <CheckCircleFilled />
            <p className="eyebrow">PROJECT BRIEF READY</p>
            <h2 id="consultation-title">项目需求摘要已生成</h2>
            <p>当前版本不会向外部发送数据。正式上线时接入彬剑云官方联系方式或企业表单服务即可完成咨询闭环。</p>
            <button className="button button--primary" type="button" onClick={close}>返回官网</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="eyebrow">PROJECT INQUIRY</p>
            <h2 id="consultation-title">从一次项目评估开始</h2>
            <p className="modal-intro">告诉我们当前阶段和核心目标，先把问题边界梳理清楚。</p>
            <fieldset>
              <legend>项目类型</legend>
              <div className="project-type-options">
                {["建设新系统", "升级现有系统", "私有化部署"].map((type) => (
                  <button key={type} type="button" className={projectType === type ? "is-selected" : ""} aria-pressed={projectType === type} onClick={() => setProjectType(type)}>
                    {projectType === type ? <CheckOutlined /> : null}{type}
                  </button>
                ))}
              </div>
            </fieldset>
            <label>联系人<input name="name" required maxLength="30" placeholder="请输入姓名" /></label>
            <label>联系方式<input name="contact" required maxLength="60" placeholder="手机号、微信或邮箱" /></label>
            <label>需求简介<textarea name="brief" required maxLength="500" rows="4" placeholder="简单描述业务目标、现有系统和期望时间" /></label>
            <p className="form-note"><LockOutlined /> 演示环境仅在当前页面处理输入，不会上传或持久化。</p>
            <button className="button button--primary button--full" type="submit">生成需求摘要 <ArrowRightOutlined /></button>
          </form>
        )}
      </section>
    </div>
  );
}

function OverviewPage() {
  return (
    <main className="overview-page">
      <section className="overview-hero">
        <div className="overview-topbar"><Brand /><span>OFFICIAL WEBSITE EXPLORATION</span></div>
        <div className="overview-copy">
          <p className="eyebrow">THREE DIRECTIONS · ONE FOUNDATION</p>
          <h1>三种官网表达，<br />同一个彬剑云。</h1>
          <p>三套方案均已实现为可交互、可响应的完整页面。选择任一方向进入浏览，也可随时使用页面右侧切换器进行对比。</p>
        </div>
        <div className="overview-orbit" aria-hidden="true"><img src="/brand/binbot-icon-inverse.svg" alt="" /></div>
      </section>
      <section className="design-gallery" aria-labelledby="design-gallery-title">
        <div className="section-heading section-heading--center"><p className="eyebrow">DESIGN DIRECTIONS</p><h2 id="design-gallery-title">选择一个方向开始体验</h2></div>
        <div className="design-gallery-grid">
          {DESIGNS.map((design, index) => (
            <article className="design-card" key={design.path}>
              <button type="button" className="design-card-image" onClick={() => goTo(design.path)} aria-label={`打开${design.name}方案`}>
                <img src={design.image} alt={`${design.name}官网视觉稿`} /><span>进入方案 <ArrowRightOutlined /></span>
              </button>
              <div className="design-card-copy">
                <div className="design-index">0{index + 1}</div>
                <div><p>{design.english}</p><h3>{design.name}</h3><p>{design.summary}</p><span>{design.tone}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="overview-footer"><span>{COMPANY_NAME}</span><span>BinBot Foundation · 企业级数字化系统底座</span></footer>
    </main>
  );
}

function DeepArchitectureVisual() {
  return (
    <div className="deep-architecture" aria-label="BinBot Foundation 架构示意">
      <div className="architecture-ring architecture-ring--outer" aria-hidden="true" />
      <div className="architecture-ring architecture-ring--inner" aria-hidden="true" />
      <div className="architecture-core"><img src="/brand/binbot-icon.svg" alt="BinBot Foundation" /></div>
      {ARCHITECTURE_NODES.map((node, index) => <div className={`architecture-node architecture-node--${index + 1}`} key={node.label}><span>{node.icon}</span><strong>{node.label}</strong></div>)}
      <div className="architecture-outputs">
        <div><TeamOutlined /><span>Admin UI</span></div><div><DesktopOutlined /><span>Customer UI</span></div><div><CodeOutlined /><span>Deploy Console</span></div>
      </div>
    </div>
  );
}

function DeepInfrastructurePage() {
  const [consultOpen, setConsultOpen] = useState(false);
  return (
    <main className="deep-page">
      <section className="deep-hero">
        <Header variant="deep" onConsult={() => setConsultOpen(true)} />
        <div className="deep-hero-grid">
          <div className="deep-hero-copy reveal">
            <p className="eyebrow">企业级数字化底座 · 私有化交付</p>
            <h1>以 BinBot Foundation 为底座<br />让复杂业务稳步落地</h1>
            <p>面向政企与中大型组织，提供统一架构、可扩展、可运维的数字化系统底座，支撑多业务协同与长期演进。</p>
            <div className="hero-actions"><button className="button button--primary" type="button" onClick={() => setConsultOpen(true)}>预约方案评估</button><button className="button button--text-inverse" type="button" onClick={() => scrollToSection("capabilities")}>了解产品能力 <ArrowRightOutlined /></button></div>
          </div>
          <DeepArchitectureVisual />
        </div>
      </section>
      <section className="deep-proof" aria-label="BinBot 核心特征">
        {[[<LockOutlined />, "统一身份与权限"], [<DeploymentUnitOutlined />, "多业务空间隔离"], [<BuildOutlined />, "业务模块快速接入"], [<HddOutlined />, "多环境私有部署"]].map(([icon, text]) => <div key={text}>{icon}<span>{text}</span></div>)}
      </section>
      <section className="deep-capabilities section-shell" id="capabilities">
        <div className="section-heading section-heading--center"><p className="eyebrow">ONE FOUNDATION</p><h2>一个底座，承接完整数字化系统</h2><p>从基础能力到业务支撑，为企业构建可持续演进的数字化体系。</p></div>
        <div className="deep-capability-grid">{CAPABILITIES.map((item) => <article key={item.title}><span className="capability-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </section>
      <section className="deep-solutions section-shell" id="solutions">
        <div className="section-heading"><p className="eyebrow">SOLUTION MATRIX</p><h2>适配不同阶段的系统建设目标</h2></div>
        <div className="solution-list">{SOLUTIONS.map((solution, index) => <article key={solution.title}><span>{solution.icon}</span><div><small>0{index + 1}</small><h3>{solution.title}</h3><p>{solution.text}</p></div><ArrowRightOutlined /></article>)}</div>
      </section>
      <DeliverySection variant="deep" onConsult={() => setConsultOpen(true)} />
      <AboutSection variant="deep" />
      <Footer variant="deep" onConsult={() => setConsultOpen(true)} />
      <DesignSwitcher />
      <ConsultationModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </main>
  );
}

function ProductWindow() {
  const [activeSpace, setActiveSpace] = useState(0);
  const spaces = [["政务一体化平台", "gov-platform"], ["工业互联网平台", "iiot-platform"], ["教育管理平台", "edu-platform"], ["企业服务中心", "biz-center"]];
  return (
    <div className="product-composition" aria-label="BinBot 产品界面示意">
      <div className="product-window">
        <aside><img src="/brand/binbot-icon-inverse.svg" alt="" />{[<AppstoreOutlined />, <TeamOutlined />, <LockOutlined />, <SettingOutlined />].map((icon, index) => <span key={index}>{icon}</span>)}</aside>
        <div className="product-window-main">
          <div className="product-window-top"><img src="/brand/binbot-lockup.svg" alt="BinBot" /><span><UserOutlined /> A</span></div>
          <div className="product-title-row"><div><small>UBS / WORKSPACE</small><h3>业务空间管理</h3></div><button type="button">新建空间</button></div>
          <div className="product-filter"><span>搜索业务空间名称</span><span>运行状态</span></div>
          <div className="product-table" role="listbox" aria-label="业务空间列表">
            {spaces.map(([name, code], index) => <button key={code} type="button" role="option" aria-selected={activeSpace === index} onClick={() => setActiveSpace(index)}><span>{name}</span><code>{code}</code><em>运行中</em></button>)}
          </div>
        </div>
      </div>
      <div className="deploy-card">
        <div><small>DEPLOY PIPELINE</small><strong>部署流程</strong><span>4 / 5</span></div>
        <div className="deploy-steps">{["环境检查", "配置准备", "服务部署", "联调验证", "完成上线"].map((step, index) => <div key={step} className={index < 4 ? "is-done" : ""}><span>{index < 4 ? <CheckOutlined /> : index + 1}</span><small>{step}</small></div>)}</div>
      </div>
    </div>
  );
}

function CloudEditorialPage() {
  const [consultOpen, setConsultOpen] = useState(false);
  return (
    <main className="editorial-page">
      <div className="editorial-announcement"><span>BinBot Foundation 已支持私有化部署与多环境工程交付。</span><span>产品架构 · 交付支持</span></div>
      <Header variant="editorial" onConsult={() => setConsultOpen(true)} />
      <section className="editorial-hero">
        <div className="editorial-hero-copy reveal">
          <p className="eyebrow">BINBOT FOUNDATION · DIGITAL DELIVERY</p>
          <h1>把复杂系统，<br />做成可持续演进的<br />业务能力</h1>
          <p>基于统一身份、业务空间、动态路由与运维体系，为企业构建可上线、可扩展、可私有部署的数字化系统。</p>
          <div className="hero-actions"><button className="button button--primary" type="button" onClick={() => setConsultOpen(true)}>预约方案评估</button><button className="button button--outline" type="button" onClick={() => scrollToSection("capabilities")}>查看技术架构</button></div>
        </div>
        <ProductWindow />
      </section>
      <section className="editorial-proof"><h2>从基础能力到业务交付，保持一套工程标准</h2><div><article><SafetyCertificateOutlined /><strong>统一权限模型</strong><span>统一身份与授权，细粒度策略控制</span></article><article><AppstoreOutlined /><strong>管理端与客户应用</strong><span>同一底座支撑多业务应用</span></article><article><CloudServerOutlined /><strong>部署与运行闭环</strong><span>标准化部署流程，稳定可观测运行</span></article></div></section>
      <section className="editorial-capabilities section-shell" id="capabilities">
        <div className="editorial-section-title"><p>BinBot Foundation</p><h2>核心能力</h2></div>
        <div className="editorial-capability-layout">
          <article className="featured-capability"><span><ApiOutlined /></span><p className="eyebrow">BIZ STARTER</p><h3>业务快速接入</h3><p>提供标准化接入框架与 SDK，支持多种协议和数据格式，帮助业务系统快速对接并上线运行。</p><ul><li><CheckCircleFilled /> 标准化接入协议与契约</li><li><CheckCircleFilled /> 多种数据源快速对接</li><li><CheckCircleFilled /> 可配置路由与策略</li></ul></article>
          <div className="capability-rows">{CAPABILITIES.filter((_, index) => index !== 1).map((item) => <article key={item.title}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRightOutlined /></article>)}</div>
        </div>
      </section>
      <section className="editorial-solutions section-shell" id="solutions"><div className="section-heading"><p className="eyebrow">SOLUTION SCENARIOS</p><h2>从共性底座，生长出具体业务</h2></div><div className="editorial-solution-grid">{SOLUTIONS.map((item) => <article key={item.title}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <DeliverySection variant="editorial" onConsult={() => setConsultOpen(true)} />
      <AboutSection variant="editorial" />
      <Footer variant="editorial" onConsult={() => setConsultOpen(true)} />
      <DesignSwitcher />
      <ConsultationModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </main>
  );
}

function DeliveryBlueprint() {
  return (
    <div className="delivery-blueprint" aria-label="五阶段交付蓝图">
      <p>DELIVERY BLUEPRINT</p>
      <div className="blueprint-path">{DELIVERY_STEPS.map((step, index) => <article key={step.title}><span>{step.icon}</span><h3>{step.title}</h3>{index < DELIVERY_STEPS.length - 1 ? <ArrowRightOutlined /> : null}</article>)}</div>
      <div className="blueprint-core"><img src="/brand/binbot-lockup.svg" alt="BinBot Foundation" /><span>BinBot Foundation</span></div>
      <div className="blueprint-services">{ARCHITECTURE_NODES.map((node) => <span key={node.label}>{node.icon}{node.label}<i /></span>)}</div>
    </div>
  );
}

function EngineeringDeliveryPage() {
  const [consultOpen, setConsultOpen] = useState(false);
  const chooseType = (type) => {
    setConsultOpen(true);
    window.sessionStorage.setItem("binjian-project-type", type);
  };
  return (
    <main className="engineering-page">
      <section className="engineering-hero">
        <Header variant="engineering" onConsult={() => setConsultOpen(true)} />
        <div className="engineering-hero-copy reveal"><p className="eyebrow">DIGITAL SYSTEM ENGINEERING</p><h1>构建能真正落地的<br />企业数字化系统</h1><p>从架构底座、业务研发到私有化部署，彬剑云以统一工程体系推进每一次交付。</p><div className="hero-actions"><button className="button button--primary" type="button" onClick={() => setConsultOpen(true)}>发起项目评估 <ArrowRightOutlined /></button><button className="button button--outline-inverse" type="button" onClick={() => scrollToSection("delivery")}>查看交付方法 <ArrowRightOutlined /></button></div></div>
        <DeliveryBlueprint />
        <div className="project-selector" aria-label="选择项目类型"><h2>你正在规划哪类项目？</h2><div><button type="button" onClick={() => chooseType("建设新系统")}><BuildOutlined />建设新系统</button><button type="button" onClick={() => chooseType("升级现有系统")}><RocketOutlined />升级现有系统</button><button type="button" onClick={() => chooseType("私有化部署")}><SafetyCertificateOutlined />私有化部署</button></div><button type="button" aria-label="发起项目评估" onClick={() => setConsultOpen(true)}><ArrowRightOutlined /></button></div>
      </section>
      <section className="engineering-capabilities section-shell" id="capabilities"><div className="engineering-intro"><div><p className="eyebrow">ENGINEERING SYSTEM</p><h2>不只交付功能，<br />更交付可持续运行的系统</h2><NodeIndexOutlined /></div><div><p>我们以工程化方法贯穿系统全生命周期，从底座到应用，确保系统安全、稳定、可扩展、可持续运行。</p><div className="engineering-rows">{CAPABILITIES.map((item) => <article key={item.title}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRightOutlined /></article>)}</div></div></div></section>
      <section className="engineering-solutions section-shell" id="solutions"><div className="section-heading section-heading--center"><p className="eyebrow">PROJECT SCENARIOS</p><h2>围绕项目目标，组合合适的能力</h2></div><div className="engineering-solution-grid">{SOLUTIONS.map((item, index) => <article key={item.title}><small>0{index + 1}</small><span>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <DeliverySection variant="engineering" onConsult={() => setConsultOpen(true)} />
      <AboutSection variant="engineering" />
      <Footer variant="engineering" onConsult={() => setConsultOpen(true)} />
      <DesignSwitcher />
      <ConsultationModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </main>
  );
}

function DeliverySection({ variant, onConsult }) {
  return (
    <section className={`delivery-section delivery-section--${variant} section-shell`} id="delivery">
      <div className="section-heading"><p className="eyebrow">DELIVERY METHOD</p><h2>把复杂项目拆成可交付、可验证的工程节奏</h2></div>
      <div className="delivery-step-grid">{DELIVERY_STEPS.map((step) => <article key={step.title}><small>{step.number}</small><span>{step.icon}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      <div className="delivery-action"><p>有明确需求，也可以从一次架构评估开始。</p><button className="button button--primary" type="button" onClick={onConsult}>预约方案评估 <ArrowRightOutlined /></button></div>
    </section>
  );
}

function AboutSection({ variant }) {
  return (
    <section className={`about-section about-section--${variant}`} id="about">
      <div className="about-mark"><img src="/brand/binbot-icon-inverse.svg" alt="" /></div>
      <div><p className="eyebrow">ABOUT BINJIAN CLOUD</p><h2>以可靠工程能力，支撑业务长期演进</h2><p>彬剑云信息技术有限公司专注企业级数字化系统建设。我们以 BinBot Foundation 为技术底座，将共性平台能力、业务研发和私有化交付整合为一套可持续运行的工程体系。</p></div>
      <dl><div><dt>Foundation</dt><dd>统一基础能力</dd></div><div><dt>Delivery</dt><dd>完整交付闭环</dd></div><div><dt>Evolution</dt><dd>持续迭代演进</dd></div></dl>
    </section>
  );
}

function Footer({ variant, onConsult }) {
  return (
    <footer className={`site-footer site-footer--${variant}`}>
      <div><Brand inverse /><p>企业级数字化系统研发与私有化交付</p></div>
      <div><h2>让我们从项目边界和架构评估开始。</h2><button className="button button--primary" type="button" onClick={onConsult}>发起项目咨询 <SendOutlined /></button></div>
      <div className="footer-bottom"><span>© 2026 {COMPANY_NAME}</span><span>BinBot Foundation</span><span>备案信息待正式上线前补充</span></div>
    </footer>
  );
}

export function App() {
  const path = useHashRoute();
  if (path === "/deep-infrastructure") return <DeepInfrastructurePage />;
  if (path === "/cloud-editorial") return <CloudEditorialPage />;
  if (path === "/engineering-delivery") return <EngineeringDeliveryPage />;
  return <OverviewPage />;
}
