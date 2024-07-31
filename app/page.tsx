import Icon1 from "@/assets/Icon1";
import Icon2 from "@/assets/Icon2";
import Icon3 from "@/assets/Icon3";
import Board from "@/components/Board";
import InfoCard from "@/components/InfoCard";
import LeftSideBar from "@/components/LeftSideBar";
import TaskCard from "@/components/TaskCard";
import TopBar from "@/components/TopBar";

const infoData = [
  {
    icon: <Icon1 />,
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    icon: <Icon2 />,
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    icon: <Icon3 />,
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
];
export default function Home() {
  return (
    <div className="flex">
      <LeftSideBar />
      <main className="flex-1 p-8 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold">Good morning, Joe!</h1>
        <div className="flex space-x-4 mt-8 overflow-x-auto">
          {infoData.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <TopBar />
        <Board />
      </main>
    </div>
  );
}
