import type { NextApiRequest, NextApiResponse } from 'next';

type Profile = {
  whoami: string;
  website: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Profile>) => {
  res.status(200).json({
    whoami: "Leo van Haaren",
    website: "https://leovanhaaren.com",
  });
};