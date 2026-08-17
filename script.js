/* ===================== 三国主公适配测试 ===================== */

/* 主公数据：最适合追随谁 */
const LORDS = {
  liu:  { name:"刘备", zi:"字玄德 · 昭烈帝", title:"仁德之主", seal:"刘",
    analysis:"你重情义、守道义，宁可慢一步也要站得住大义。共患难时你最易赢得真心，在讲信义、重团队的土壤里也成长得最好。你的短板是有时太重情面、下不了狠心——该断时不妨果断些，仁义不等于犹豫。" },
  cao:  { name:"曹操", zi:"字孟德 · 魏武帝", title:"乱世奸雄 / 治世能臣", seal:"曹",
    analysis:"你有野心也有本事，欣赏实干与才干胜过出身。在唯才是举的环境里，你最能凭能力上位，前提是敢拼、不怕争议。你的短处是疑心偏重、容易走极端——信人之前，先给彼此一个缓冲，路反而走得更稳。" },
  sun:  { name:"孙权", zi:"字仲谋 · 吴大帝", title:"守成之主", seal:"孙",
    analysis:"你冷静稳重，懂得借势与平衡。在稳固的盘子里慢慢做大，是你最舒服的节奏；不冒无谓的险，却坐得住江山。你的短板是有时过于求稳、缺了破局魄力——机会来时，不妨赌一把，稳中也可求变。" },
  yuan: { name:"袁绍", zi:"字本初 · 冀州之主", title:"名门之主", seal:"袁",
    analysis:"你重体面、讲出身、性情宽厚，天然招人亲近，在名望与资源里起步很高。你的短板是优柔寡断、谋得多断得少——最容易错失天时。学会在关键时刻拍板，你这副好牌才打得出来。" },
  dong: { name:"董卓", zi:"字仲颖 · 太师", title:"暴烈之主", seal:"董",
    analysis:"你崇尚力量、说一不二，乱世里敢下狠手，做事雷厉风行、借强势快速翻盘。但你要当心众叛亲离的代价——威可服人一时，唯仁德能聚人长久。刚中带柔，你的路才走得更远。" },
  lvbu: { name:"吕布", zi:"字奉先 · 飞将", title:"无双飞将", seal:"吕",
    analysis:"你天赋过人、重自由，不喜被束缚，在个人英雄的路上能尽情发挥、所向披靡。可你的短板是缺了根基与信义——一柄好矛若没有握紧的手，终究难成大事。找个能托付的阵营，你的锋芒才有人接住。" }
};

/* 历史人物数据：你最像的三国英雄 */
const FIGURES = {
  guanyu:    { name:"关羽",   zi:"字云长",   desc:"忠义双全、傲骨铮铮。你重诺守信，做人有棱角，朋友信你、对手敬你。" },
  zhaoyun:   { name:"赵云",   zi:"字子龙",   desc:"沉稳忠勇、进退有度。你靠得住，关键时刻能扛事，是团队里最让人放心的那一个。" },
  zhangfei:  { name:"张飞",   zi:"字翼德",   desc:"直率豪爽、粗中有细。你性情如火、说一不二，路见不平就上，朋友交心不交面。" },
  zhuge:     { name:"诸葛亮", zi:"字孔明",   desc:"鞠躬尽瘁、慎思密谋。你思虑周全、凡事有章法，靠脑子而非嗓门赢得尊重。" },
  sima:      { name:"司马懿", zi:"字仲达",   desc:"隐忍蓄势、老谋深算。你善于等待与布局，不争一时之高下，笑到最后的往往是你。" },
  guojia:    { name:"郭嘉",   zi:"字奉孝",   desc:"鬼才（料事如神）。你眼光毒、敢下注，别人还在犹豫，你已看见十步之后的局。" },
  xunyu:     { name:"荀彧",   zi:"字文若",   desc:"王佐之才、雅量高致。你有格局也有底线，既能成事，也守得住心中的秩序。" },
  jiaxu:     { name:"贾诩",   zi:"字文和",   desc:"乱世毒士、明哲保身。你看得透人心，出手狠、自保稳，活得比谁都清醒。" },
  zhouyu:    { name:"周瑜",   zi:"字公瑾",   desc:"才情横溢、意气风发。你又帅又能打，带着少年心气闯天下，招人喜欢也招人忌。" },
  luxun:     { name:"陆逊",   zi:"字伯言",   desc:"白衣渡江、少年统帅。你外柔内刚、忍辱负重，关键时刻一招定乾坤。" },
  lushu:     { name:"鲁肃",   zi:"字子敬",   desc:"忠厚长者、大局为重。你看得清利害、也容得下分歧，是乱局里少有的稳定器。" },
  taishici:  { name:"太史慈", zi:"字子义",   desc:"信义少年、酣战小霸王。你一诺千金、重情重义，刀光剑影里也守得住信字。" },
  huangzhong:{ name:"黄忠",   zi:"字汉升",   desc:"老当益壮、宝刀不老。你不凭年龄论英雄，越是被小看，越要让人刮目相看。" },
  jiangwei:  { name:"姜维",   zi:"字伯约",   desc:"天水麒麟、继承遗志。你负重前行、死而后已，把别人的理想扛成了自己的命。" },
  machao:    { name:"马超",   zi:"字孟起",   desc:"西凉锦马超、骁勇剽悍。你出身名门、骄傲鲜衣，战场上是往无前的锋芒。" },
  fazheng:   { name:"法正",   zi:"字孝直",   desc:"奇谋善断、恩怨分明。你记恩也记仇，护短而果决，是主公身边最锋利的那把刀。" },
  xuchu:     { name:"许褚",   zi:"字仲康",   desc:"虎痴猛将、忠勇无双。你憨直重义、护主不惜命，平时闷声，关键时刻最靠得住。" },
  dianwei:   { name:"典韦",   zi:"古之恶来", desc:"悍不畏死、以命护主。你舍生忘死、忠勇到了不要命的份上，是主公的最后一道墙。" },
  huaxiong:  { name:"华雄",   zi:"董卓骁将", desc:"骁勇善战、敢打头阵。你越是硬仗越要争这口气，温酒之间已扬名阵前。" },
  zhangliao: { name:"张辽",   zi:"字文远",   desc:"威震逍遥、勇冠三军。你临危扛旗、一句号令能稳全军，是天生的镇场之人。" },
  ganning:   { name:"甘宁",   zi:"字兴霸",   desc:"锦帆百骑、胆识过人。你不守成规、敢闯敢劫，草莽里也能闯出名堂。" },
  weiyan:    { name:"魏延",   zi:"字文长",   desc:"骁勇任气、脑后有反骨。你不服管、有野心，偏要走出一条没人敢走的路。" },
  gaoshun:   { name:"高顺",   zi:"陷阵营主", desc:"治军如铁、败而不降。你律己律人，沉默里藏着最硬的风骨。" },
  huanggai:  { name:"黄盖",   zi:"字公覆",   desc:"苦肉老将、火攻建功。你甘担骂名、成全大局，老辣之处最见担当。" }
};

/* 题目：theme=小标题，q=题干，opts=[{t:选项, l:主公, f:人物}] */
const QUESTIONS = [
  { theme:"志向", q:"若生于汉末乱世，你最大的志向是？", opts:[
    { t:"上报国家、下安黎庶，兴复汉室", l:"liu", f:"guanyu" },
    { t:"宁我负人，不做被负之人，做乱世真雄", l:"cao", f:"sima" },
    { t:"守好自己的一方基业，护住身边的人", l:"sun", f:"zhouyu" },
    { t:"凭一身绝艺，闯出万世威名", l:"lvbu", f:"ganning" }
  ]},
  { theme:"用人", q:"招贤纳士时，你最看重什么？", opts:[
    { t:"德行第一，宁用拙诚不用巧诈", l:"liu", f:"guanyu" },
    { t:"唯才是举，有才便用，不问出身", l:"cao", f:"sima" },
    { t:"慕名门望族，重门第与体面", l:"yuan", f:"huangzhong" },
    { t:"强者为尊，服我就留，不服就走", l:"dong", f:"xuchu" }
  ]},
  { theme:"决策", q:"面对重大抉择，你通常？", opts:[
    { t:"从大义出发，宁可慢些也要站住理", l:"liu", f:"guanyu" },
    { t:"权衡利弊，求稳不求险", l:"sun", f:"zhouyu" },
    { t:"顾及颜面与体统，不落人口实", l:"yuan", f:"huangzhong" },
    { t:"说一不二，不服的用实力说话", l:"dong", f:"xuchu" }
  ]},
  { theme:"危机", q:"危局骤临，你会？", opts:[
    { t:"化危为机，借势翻盘", l:"cao", f:"sima" },
    { t:"以静制动，固守待变", l:"sun", f:"zhouyu" },
    { t:"随风转舵，先活下来再说", l:"lvbu", f:"ganning" },
    { t:"广结名士，靠人脉渡过难关", l:"yuan", f:"huangzhong" }
  ]},
  { theme:"对敌", q:"与对手交锋，你的风格是？", opts:[
    { t:"以德服人，能招降不赶尽", l:"liu", f:"zhaoyun" },
    { t:"断其根本，不留后患", l:"cao", f:"guojia" },
    { t:"离间分化，不战而屈人之兵", l:"sun", f:"luxun" },
    { t:"以威压人，杀鸡儆猴", l:"dong", f:"dianwei" }
  ]},
  { theme:"行事", q:"平日里你最像哪一种人？", opts:[
    { t:"宽厚待人，重情念旧", l:"liu", f:"zhaoyun" },
    { t:"城府深沉，喜怒不形于色", l:"cao", f:"guojia" },
    { t:"礼数周全，最重体面声望", l:"yuan", f:"jiangwei" },
    { t:"独来独往，不喜受人约束", l:"lvbu", f:"ganning" }
  ]},
  { theme:"性情", q:"你的情绪底色是？", opts:[
    { t:"外冷内热，心里有数", l:"sun", f:"luxun" },
    { t:"温厚含蓄，不爱争抢", l:"yuan", f:"jiangwei" },
    { t:"性情如火，一点就着", l:"dong", f:"huaxiong" },
    { t:"艺高人胆大，阵前也潇洒", l:"lvbu", f:"weiyan" }
  ]},
  { theme:"失败", q:"大败之后，你第一反应是？", opts:[
    { t:"愈挫愈勇，从头再来", l:"liu", f:"zhangfei" },
    { t:"复盘布局，下次连本带利", l:"cao", f:"xunyu" },
    { t:"及时止损，保住根基", l:"sun", f:"taishici" },
    { t:"换个靠山，再图后计", l:"lvbu", f:"gaoshun" }
  ]},
  { theme:"团队", q:"你理想的班底是？", opts:[
    { t:"兄弟同心，其利断金", l:"liu", f:"zhuge" },
    { t:"能人为主，赏罚分明", l:"cao", f:"xunyu" },
    { t:"门生故吏遍天下，靠人脉", l:"yuan", f:"fazheng" },
    { t:"唯我独尊，顺我者昌", l:"dong", f:"zhangliao" }
  ]},
  { theme:"权力", q:"你如何看待权力？", opts:[
    { t:"权力在手，天下我有", l:"cao", f:"jiaxu" },
    { t:"权力是用来守住一方太平", l:"sun", f:"lushu" },
    { t:"权力靠家世名望撑着", l:"yuan", f:"machao" },
    { t:"功名本就是自己闯出来的", l:"lvbu", f:"huanggai" }
  ]}
];

const WEIGHT = 3;

/* ---------- 状态 ---------- */
let current = 0;
const answers = new Array(QUESTIONS.length).fill(null); // 存用户选中的选项对象

/* ---------- DOM ---------- */
const $ = (id) => document.getElementById(id);
const screens = {
  intro: $("screen-intro"),
  quiz:  $("screen-quiz"),
  result:$("screen-result")
};

function showScreen(name){
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

/* ---------- 工具：洗牌（Fisher–Yates），每题选项随机排序 ---------- */
function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- 渲染题目 ---------- */
function renderQuestion(){
  const item = QUESTIONS[current];
  $("quiz-count").textContent = `第 ${current+1} / ${QUESTIONS.length} 题`;
  $("quiz-theme").textContent = item.theme;
  $("question-text").textContent = item.q;

  const pct = Math.round((current / QUESTIONS.length) * 100);
  $("progress-fill").style.width = pct + "%";

  const box = $("options");
  box.innerHTML = "";
  const marks = ["甲","乙","丙","丁"];
  // 关键：每题选项随机排序，主公不再固定占某一位置
  const shown = shuffle(item.opts);
  shown.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn._opt = opt;
    btn.className = "option" + (answers[current] === opt ? " selected" : "");
    btn.innerHTML = `<span class="opt-mark">${marks[i]}</span>${opt.t}`;
    btn.addEventListener("click", () => choose(opt));
    box.appendChild(btn);
  });

  $("btn-back").classList.toggle("hidden", current === 0);
}

function choose(opt){
  answers[current] = opt;
  // 即时高亮（按选项对象引用比对）
  [...$("options").children].forEach(el =>
    el.classList.toggle("selected", el._opt === opt));
  // 轻延迟后进入下一题，给视觉反馈
  setTimeout(() => {
    if (current < QUESTIONS.length - 1){ current++; renderQuestion(); }
    else finish();
  }, 220);
}

function goBack(){
  if (current > 0){ current--; renderQuestion(); }
}

/* ---------- 计分 ---------- */
function calcScores(){
  const lord = {}, fig = {}, maxLord = {}, maxFig = {};
  Object.keys(LORDS).forEach(k => { lord[k] = 0; maxLord[k] = 0; });
  Object.keys(FIGURES).forEach(k => { fig[k] = 0; maxFig[k] = 0; });

  answers.forEach((ans) => {
    if (ans === null) return;
    // ans 是用户选中的选项对象，已含 l（主公）与 f（人物）
    lord[ans.l] += WEIGHT;
    fig[ans.f]  += WEIGHT;
  });

  // 每题每个选项都会给一个主公和一个人物加分，所以理论最大值按出现次数 * WEIGHT 算
  QUESTIONS.forEach(q => {
    q.opts.forEach(o => {
      maxLord[o.l] += WEIGHT;
      maxFig[o.f] += WEIGHT;
    });
  });

  const topLord = Object.keys(lord).sort((a,b)=>lord[b]-lord[a])[0];
  const secondLord = Object.keys(lord).sort((a,b)=>lord[b]-lord[a])[1];
  const topFig = Object.keys(fig).sort((a,b)=>fig[b]-fig[a])[0];

  const pct = maxLord[topLord] ? Math.min(99, Math.round(lord[topLord] / maxLord[topLord] * 100)) : 0;

  return { topLord, secondLord, topFig, pct, lord, fig, maxLord, maxFig };
}

/* ---------- 量表 ---------- */
function renderScale(r){
  const toRows = (scores, maxes, labels) =>
    Object.keys(scores)
      .map(k => ({
        name: labels[k].name,
        score: scores[k],
        max: maxes[k],
        pct: maxes[k] ? Math.min(99, Math.round(scores[k] / maxes[k] * 100)) : 0
      }))
      .sort((a, b) => b.score - a.score);

  const makeBars = rows => rows.map(row => `
    <div class="scale-row">
      <span class="scale-name">${row.name}</span>
      <div class="scale-track"><div class="scale-fill" style="width:${row.pct}%"></div></div>
      <span class="scale-pct">${row.pct}%</span>
    </div>
  `).join("");

  const lordRows = toRows(r.lord, r.maxLord, LORDS);
  const figRows  = toRows(r.fig,  r.maxFig,  FIGURES);

  $("scale").innerHTML = `
    <div class="scale-title">详细量表</div>
    <div class="scale-section">
      <div class="scale-subtitle">主公适配度排行</div>
      ${makeBars(lordRows)}
    </div>
    <div class="scale-section">
      <div class="scale-subtitle">人物相似度排行</div>
      ${makeBars(figRows)}
    </div>
    <p class="scale-tip">注：主公与人物分别计分，因此它们可以不同。例如适合追随曹操，但性格更像司马懿。</p>
  `;
}

/* ---------- 结果 ---------- */
function finish(){
  const r = calcScores();
  const L = LORDS[r.topLord];
  const F = FIGURES[r.topFig];
  const S = LORDS[r.secondLord];

  $("lord-seal").textContent = L.seal;
  $("lord-name").textContent = L.name;
  $("lord-zihao").textContent = L.zi;
  $("lord-title").textContent = L.title;
  $("match-pct").textContent = r.pct;
  $("lord-analysis").textContent = L.analysis;

  $("figure-name").textContent = F.name;
  $("figure-zihao").textContent = F.zi;
  $("figure-desc").textContent = F.desc;

  $("second-name").textContent = S.name;
  $("second-title").textContent = S.title;
  $("second-desc").textContent = `若换一种际遇，你也能在「${S.name}」麾下施展拳脚——这是你第二适配的主公（最适合追随的第二人选），与“你最像谁”是两回事。`;

  // 渲染详细量表
  renderScale(r);

  $("share-url").textContent = location.href;
  showScreen("result");
  $("progress-fill").style.width = "100%";
  // 结果页较长，回到顶部，避免标题被截掉
  window.scrollTo(0, 0);
}

/* ---------- 分享 ---------- */
function buildShareText(){
  const r = calcScores();
  const L = LORDS[r.topLord];
  const F = FIGURES[r.topFig];
  return `【三国主公适配测试】我最适合追随的主公是「${L.name}·${L.title}」，最像的三国英雄是「${F.name}」，适配度 ${r.pct}%。乱世将至，你当追随何人？快来测测→ ${location.href}`;
}

async function doShare(){
  const text = buildShareText();
  if (navigator.share){
    try{
      await navigator.share({ title:"三国主公适配测试", text, url:location.href });
      return;
    }catch(e){ /* 用户取消则走复制 */ }
  }
  await copyText(text);
}

async function copyText(text){
  try{
    if (navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta);
    }
    toast("已复制，去粘贴分享吧");
  }catch(e){
    toast("复制失败，请手动长按选择");
  }
}

function toast(msg){
  const t = $("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>t.classList.remove("show"), 1800);
}

/* ---------- 重测 ---------- */
function retry(){
  current = 0;
  answers.fill(null);
  renderQuestion();
  showScreen("quiz");
}

/* ---------- 绑定 ---------- */
$("btn-start").addEventListener("click", () => { renderQuestion(); showScreen("quiz"); });
$("btn-back").addEventListener("click", goBack);
$("btn-retry").addEventListener("click", retry);
$("btn-share").addEventListener("click", doShare);
$("btn-copy").addEventListener("click", () => copyText(buildShareText()));

showScreen("intro");
