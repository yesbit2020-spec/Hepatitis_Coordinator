document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab Switching for Staff Flow
    const tabBtns = document.querySelectorAll('.tab-btn-pill');
    const tabRoot = document.getElementById('tab-root');

    const updateTabContent = (name) => {
        let html = '';
        if (name === 'flow') {
            html = `
                <div class="flow-container">
                    <p class="mb-2">患者さんの拾い上げフロー</p>
                    <div class="step-grid">
                        <div class="step-card">
                            <div class="step-badge">01</div>
                            <h4>スクリーニング</h4>
                            <p>術前検査等でHBs抗原・HCV抗体陽性を確認。電子カルテのアラートを活用。</p>
                        </div>
                        <div class="step-card">
                            <div class="step-badge">02</div>
                            <h4>肝Coチーム共有</h4>
                            <p>陽性者を確実に捕捉し、コーディネーターが状況を把握（内線 1234）。</p>
                        </div>
                        <div class="step-card">
                            <div class="step-badge">03</div>
                            <h4>専門医へ接続</h4>
                            <p>紹介状ひな形を用いて、肝臓専門医の外来予約をその場で実施。</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (name === 'roles') {
            html = `<div class="card glass-card"><p>医師、看護師、医療事務、技師、薬剤師。それぞれの役割に応じたアクションガイドを掲載中。</p></div>`;
        } else if (name === 'precautions') {
            html = `<div class="card glass-card"><p style="color:#d32f2f"><strong>【標準予防策の徹底】</strong> 差別防止のため、過剰な防護（食器の別け隔て等）は行わないでください。</p></div>`;
        }
        tabRoot.innerHTML = html;
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTabContent(btn.getAttribute('data-tab'));
        });
    });

    // Initial content
    updateTabContent('flow');

    // 2. Detail Overlay (Modal) logic
    const overlay = document.getElementById('detail-overlay');
    const overlayBody = document.getElementById('detail-body');
    const closeBtn = document.querySelector('.close-overlay');
    const triggers = document.querySelectorAll('.info-trigger');

    const tipText = '<div class="modal-tip">＊こちらに文章や画像が入ります。</div>';

    const details = {
        'subsidy': { title: '助成金制度の詳細', content: `<p>肝炎治療受給者証、初回精密検査費用助成などの詳細情報を掲載します。</p>${tipText}` },
        'psychology': { title: '患者心理への理解と配慮', content: `<p>告知時の精神的ショック、スティグマ（偏見）への対処、安心感を与えるコミュニケーションについて解説します。</p>${tipText}` },
        'internal-network': { title: '地域連携ネットワーク', content: `<p>拠点病院リストと当院のコーディネーター24名の配置図を掲載。</p>${tipText}` },
        'local-hospitals': { title: '連携拠点病院リスト', content: `<p>都道府県が指定する肝疾患診療連携拠点病院および専門医の一覧。最新の空き状況は地域医療連携室経由で確認可能です。</p>${tipText}` },
        'consultation': { title: '相談窓口のご案内', content: `<p>肝Coが匿名で対応。内線 1234 または直接 連携室へお越しください。</p>${tipText}` },
        'subsidy-patient': { title: '患者さん向け助成案内', content: `<p>医療費負担を軽減するための公的補助の申請ステップを解説。</p>${tipText}` },
        'work-life': { title: '治療と仕事の両立支援', content: `<p>ハローワークや産業保健総合支援センターとの連携、休暇制度の相談を承ります。</p>${tipText}` }
    };

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const key = trigger.getAttribute('data-detail');
            if (details[key]) {
                overlayBody.innerHTML = `<h3>${details[key].title}</h3><div class="mt-2 text-large">${details[key].content}</div>`;
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeBtn) {
        closeBtn.onclick = () => { overlay.classList.remove('active'); document.body.style.overflow = 'auto'; };
    }
    if (overlay) {
        overlay.onclick = (e) => { if(e.target === overlay) closeBtn.onclick(); };
    }

    // 3. News Ticker (JSON fetch)
    const fetchNews = async () => {
        const ticker = document.querySelector('.news-scroll-inner');
        if (!ticker) return;
        try {
            const res = await fetch('assets/news.json');
            const data = await res.json();
            const newsStr = data.news.map(n => `【${n.category}】${n.title}`).join('　/　');
            // リピートして途切れないようにする
            ticker.innerHTML = `<p>${newsStr}　/　${newsStr}　/　${newsStr}</p>`;
        } catch (e) {
            ticker.innerHTML = '<p>Latest info available via internal portal.</p>';
        }
    };
    fetchNews();
});
