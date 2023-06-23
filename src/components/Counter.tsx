import Button from "@/components/common/button";

const Counter = () => {
  return (
    <div>
      <Button type="button">더하기</Button>
      <Button
        type="button"
        className={"inline-flex items-center"}
        designType="secondary"
      >
        <span>기업서비스</span>
        <span className="ml-1">&gt;</span>
      </Button>
    </div>
  );
};

export default Counter;
