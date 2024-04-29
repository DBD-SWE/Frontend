import AdvancedTable from '../../../components/table/activity-log/table';

export default function Activity() {
  return (
    <div className="flex w-full flex-col pb-12">
      <div className="mt-4 rounded border-t-[16px] border-t-gray-100 px-4 py-7 shadow-sm">
        <AdvancedTable />
      </div>
      {/* Body Section */}
    </div>
  );
}
