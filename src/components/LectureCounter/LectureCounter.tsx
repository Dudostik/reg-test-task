interface LectureCounterProps {
  count: number;
}

const LectureCounter = ({ count }: LectureCounterProps) => {
  return (
    <div className="text-center py-4 px-6 bg-gray-100 rounded-lg">
      <p className="text-gray-700 font-medium">
        Выбрано лекций: <span className="font-bold text-blue-600">{count}</span>
      </p>
    </div>
  );
};

export default LectureCounter;
