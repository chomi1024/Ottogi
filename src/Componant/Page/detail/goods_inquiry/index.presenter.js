import * as I from "./index.style";

export default function InquiryWrapperUI() {
  return (
    <I.inquiry_wrapper>
      <h4>
        상품문의 <span>6</span>
      </h4>

      <I.Menu_wrapper>
        <span>
          <input type="checkbox" /> 내 문의 보기
        </span>
        <a href="#">문의 작성하기</a>
      </I.Menu_wrapper>

      <I.inquiry_contents_wrapper>
        <I.inquiry_contents>
          <I.answer>답변완료</I.answer>
          <div>
            <span>33833311***</span>
            <span>2024.03.14</span>
          </div>
          <p>[옵션/재고수량] 한개가 안왔어요</p>
          <button>더보기</button>
        </I.inquiry_contents>
      </I.inquiry_contents_wrapper>
    </I.inquiry_wrapper>
  );
}
