import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const answer =
  <>
    <h2 style={{ fontSize: 55 }}>BlogPost</h2>
    <Card variant='outlined' sx={{ minWidth: 275, height: 620, marginBottom: 20, marginTop: -3 }}>
      <CardContent>
      <div>
        <h3>Task</h3>
        <p><i>Use general HTML typography to create a blog post</i></p>
        <h3>Keys</h3>
        <ul>
          <li>Use 'footer' tags for the end of an article</li>
          <li>Use 'em' tags for emphasis</li>
          <li>'article' tags can help outline a blog post such as this</li>
        </ul>
      </div>
      <h3>HTML Answer Component</h3>
      <article>
        <header>
            <h1>Introducing AlgoCoin</h1>
            <p>The future of decentralized meme currency is here.</p>
        </header>

        <section>
            <h2>What is AlgoCoin?</h2>
            <p>AlgoCoin utilizes a revolutionary <strong>proof-of-inverted-binary-tree consensus algorithm</strong>
                that will absolutely transform the way we think about currency and catapult the
                metaverse to its next major stage: <em>Web 4.0</em>. Using AlgoCoin is simple. Instead of
                hoarding capital in wallets with forgotten passwords, earn AlgoCoin at the time
                of usage through our unique point-of-sale system. Each inverted binary tree
                equates to one AlgoCoin. This means if your chicken tenders cost 420
                AlgoCoin, all you need to do is invert 420 binary trees.</p>
        </section>

        <hr />

        <section>
            <h2>Where Do I Start?</h2>
            <p>Getting started with AlgoCoin is as easy as reversing a linked list. We
                recommend starting out by practicing on <a href="https://algoexpert.io" target="_blank">AlgoExpert</a>.
                Next, once you feel
                you can invert binary trees as well as an Ex-FAANG 10x engineer, it's
                time to ditch your fiat currency and enter the future.</p>
        </section>

        <footer>
            <p>Copyright 3022 AlgoCoin. All rights reserved.</p>
        </footer>
        </article>    
    </CardContent>
    </Card>
  </>

export default function BlogPost() {
  return answer;
}
