export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {

  angular: {
    name: "Angular",
    iconName: "angular",
  }, 
  java: {
  name: "Java",
  iconName: "java",
  },
  github: {
    name: "GitHub",
    iconName: "github",
  },
  octocat: {
    name: "GitHub Octocat",
    iconName: "octocat",
  },
  terraform: {
    name: "Terraform",
    iconName: "terraform",
  },
  cursorIa: {
    name: "Cursor AI",
    iconName: "cursor-ia",
  },
  aws: {
    name: "AWS",
    iconName: "aws",
  },
  awsWaf: {
   name: "AWS WAF",
   iconName: "aws-waf",
  },
  awsSqs: {
    name: "AWS SQS",
   iconName: "aws-sqs",
  },
  awsSns: {
   name: "AWS SNS",
   iconName: "aws-sns",
  },
  awsSes: {
  name: "AWS SES",
  iconName: "aws-ses",
  },
  awsS3: {
  name: "AWS S3",
  iconName: "aws-s3",
  },
  awsRoute53: {
  name: "AWS Route 53",
  iconName: "aws-route53",
  },
  awsRds: {
  name: "AWS RDS",
  iconName: "aws-rds",
  },
  awsQuicksight: {
  name: "AWS QuickSight",
  iconName: "aws-quicksight",
  },
  awsOpsworks: {
  name: "AWS OpsWorks",
  iconName: "aws-opsworks",
  },
  awsMobilehub: {
  name: "AWS MobileHub",
  iconName: "aws-mobilehub",
  },
  awsLambda: {
  name: "AWS Lambda",
  iconName: "aws-lambda",
  },
  awsKinesis: {
  name: "AWS Kinesis",
  iconName: "aws-kinesis",
  },
  awsIam: {
  name: "AWS IAM",
  iconName: "aws-iam",
  },
  awsGlacier: {
  name: "AWS Glacier",
  iconName: "aws-glacier",
  },
  awsElasticCache: {
  name: "AWS ElastiCache",
  iconName: "aws-elastic-cache",
  },
  awsEc2: {
  name: "AWS EC2",
  iconName: "aws-ec2",
  },
  awsDynamodb: {
  name: "AWS DynamoDB",
  iconName: "aws-dynamodb",
  },
  pandas: {
  name: "Pandas",
  iconName: "pandas-icon",
  },
  numpy: {
  name: "NumPy",
  iconName: "numpy-icon",
  },
  pytorch: {
  name: "PyTorch",
  iconName: "pytorch",
  },
  
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  awsStepFunctions: {
  name: "AWS Step Functions",
  iconName: "aws-step-functions-1",
  },
  awsCloudWatch: {
  name: "AWS CloudWatch",
  iconName: "aws-cloudwatch",
  },
  awsApiGateway: {
  name: "AWS API Gateway",
  iconName: "aws-api-gateway",
  },
  matplotlib: {
  name: "Matplotlib",
  iconName: "matplotlib-1",
  },
  seaborn: { 
  name: "Seaborn",
  iconName: "seaborn-1",
  },
  tensorflow: {
  name: "TensorFlow",
  iconName: "tensorflow-2",
  },
  gymnasium: {
  name: "Gymnasium",
  iconName: "gymnasium-1",
  },
  linux: {
  name: "Linux",
  iconName: "linux-tux",
  },
  Docker: {
  name: "Docker",
  iconName: "docker-svgrepo-com",
  },
  kubernetes: {
  name: "Kubernetes",
  iconName: "kube",
  },
  jenkins: {
  name: "Jenkins",
  iconName: "jenkins",
  },
  postman: {
  name: "Postman",
  iconName: "postman",
  },
  selenium: {
  name: "Selenium",
  iconName: "selenium",
  },
  pytest: {
  name: "Pytest",
  iconName: "pytest",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 