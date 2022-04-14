import { useState } from 'react';
import styles from './scss/introduction.module.scss';

export default function Introduction() {
  const [active, setActive] = useState([
    true, false, false, false
  ])

  return (
    <section className={styles.introduction}>
      <h3 className={`${styles.title} ${styles.title1}`}>
        <span>안녕하세요 :)</span>
        <span>웹 프론트엔드 개발자</span>
        <span>이수현입니다!</span>
      </h3>
      <h3 className={`${styles.title} ${styles.title2}`}>
        <span>Hi there :)</span>
        <span>I'm Sophia</span>
        <span>Web Frontend Developer!</span>
      </h3>
      <div className={styles.category}>
        <p 
        className={active[0] ? styles.active : null}
        onClick={() => setActive([true, false, false, false])}
        >Endless Self-improvement</p>
        <p 
        className={active[1] ? styles.active : null}
        onClick={() => setActive([false, true, false, false])}
        >Creating value for people</p>
        <p 
        className={active[2] ? styles.active : null}
        onClick={() => setActive([false, false, true, false])}
        >Eager to learn new technology</p>
        <p 
        className={active[3] ? styles.active : null}
        onClick={() => setActive([false, false, false, true])}
        >Improving service based on real data</p>
      </div>
      <div className={styles.text}>
        <p className={active[0] ? styles.active : null}>
          코딩을 공부하다가 문제에 막혔을 때 밤이 늦도록 문제를 붙잡고 씨름하다가 결국 해결해낸 순간의 희열을 잊지 못합니다. 저는 수학능력시험 수리영역 100점을 맞았을 정도로 어릴 때 수학을 좋아했고, 논리적으로 사고하는 것을 즐기고 그 논리적인 생각이 답을 도출해내는 과정을 좋아합니다. 웹의 변화 속도는 빠르고 새로운 기술이 계속 나오고 있기 때문에 자기 계발을 게을리하게 되면 개발자는 살아남을 수 없다고 생각합니다. 매일매일 공부를 하기 위해 1일 1커밋을 실천하려고 노력하고 있고, TIL을 블로그에 기록하고 있습니다. 늦게 공부를 시작한만큼 열심히 기술을 익히려고 노력하고 있습니다.
        </p>
        <p className={active[1] ? styles.active : null}>
          저는 제 자신이 가치있는 곳에 쓰여서 다른 사람들의 생활을 이롭게 하는 활동에 기여하는 일에 보람을 느낍니다. 그런 방향으로 나아가는 과정에서 여러 사람들과 논의하며 최선의 결과를 도출하는 과정은 저를 가치있는 사람으로 느끼게 해줍니다. 그러한 결과로 사람들로부터 긍정적인 피드백을 얻는 것에 보람을 느낍니다. 
        </p>
        <p className={active[2] ? styles.active : null}>
          REACT를 공부할 당시 새로운 개념의 등장에 며칠동안 문제를 해결하지 못하고 끙끙댔던 적이 있습니다. 그러다가 어느 순간 이해가 되는 시점이 오면서 새로운 기술을 배울 때 하다보면 언젠가는 된다라는 자신감이 생기고 더이상 두렵지 않았습니다.<br />
          저의 현재 목표는 현업에서 일하면서 공부로만 배웠던 지식에서 더 나아가 다양한 변수들을 고려하며 실무지식에 기반된 웹을 제작하는 것입니다. 그리고 node.js, express를 이용하여 서버구축까지 해서 전체적인 웹 개발을 하고 싶습니다. 차츰 파이썬이나, GO 등 다른 언어에도 도전해서 백엔드의 개념도 익히는 것이 목표입니다.
        </p>
        <p className={active[3] ? styles.active : null}>
          개발은 만드는 것에 그치지 않고 결국 사용자가 이용을 해야만 가치가 있다고 생각하기 때문에 사용자의 니즈를 충족시켜주는 서비스를 개발하고 싶습니다. 그러기 위해서는 데이터를 읽을 줄 아는 눈이 필요하다고 생각합니다. 주얼리 브랜드에서 MD로 재직할 때 일요일 저녁에 구매가 많이 일어나는 것을 데이터를 통해서 읽고 그 시간을 공략해서 구매 개수를 늘리도록 묶음 상품을 기획하고 할인율을 높여 매출을 증대시켰던 경험이 있습니다. 이렇듯 데이터 안에 답이 있다고 생각하며, 데이터를 잘 활용하여 반영시킬 수 있는 개발자가 되겠습니다.
        </p>
      </div>
    </section>
  )
}