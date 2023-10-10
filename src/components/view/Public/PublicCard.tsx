import { Card, Space } from "antd";
import { ReactNode } from "react";

const PublicCard = ({
  children,
  title,
  hoverable,
  className,
}: {
  children: ReactNode;
  title: string;
  hoverable?: boolean;
  className?:string;
  
}) => {
  return (
    <Space direction="vertical" size={16}>
      <Card hoverable={hoverable} title={title} className={className}>
        {children}
      </Card>
    </Space>
  );
};
export default PublicCard;
