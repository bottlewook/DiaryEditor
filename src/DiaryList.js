import DiaryItem from "./Diaryitem";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <div className="DiaryList">
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
