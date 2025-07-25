import Section from "./Section";

const ChartPreview = () => (
  <section className="bg-black">
    <Section delay={0.6}>
      
      <div className="w-full h-[46rem] rounded-xl overflow-hidden border border-gold shadow-lg">
     <iframe
     className="w-full h-full"
     src="https://dexscreener.com/solana/GB2aRst998GzW1oyFWskNkHmdLtLKQiutuVqZhpM7jeL?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>

       
      </div>
    </Section>
  </section>
);

export default ChartPreview;
