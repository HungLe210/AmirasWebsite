/// <reference types="react" />
import * as react from 'react';
import react__default from 'react';
import { Placement as Placement$1 } from '@floating-ui/react';
import { Dayjs } from 'dayjs';
import { Scale, CoreScaleOptions } from 'chart.js';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { Editor, EditorConfig } from '@ckeditor/ckeditor5-core';
import { WatchdogConfig } from '@ckeditor/ckeditor5-watchdog/src/watchdog';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { FileLoader, UploadAdapter } from '@ckeditor/ckeditor5-upload';

type SmlProviderProps = {
    children: React.ReactNode;
};

declare function SmlProvider({ children }: SmlProviderProps): react__default.JSX.Element;

type ComponentProps = {
    className?: string;
    style?: react__default.CSSProperties;
    children?: react__default.ReactNode;
};

type TypoProps = ComponentProps & {
    textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'display-xs' | 'display-sm' | 'display-md' | 'display-lg' | 'display-xl' | 'display-2xl';
    textStyle?: 'regular' | 'medium' | 'semibold' | 'bold';
};

declare function Typo({ children, className, style, textSize, textStyle, }: TypoProps): react__default.JSX.Element;

type IconProps = Omit<ComponentProps, 'children'> & {
    width?: number;
    height?: number;
    color?: string;
    clickable?: boolean;
    onClick?: () => void;
};

declare const ActivityHeartIcon: react.FC<IconProps>;

declare const ActivityIcon: react.FC<IconProps>;

declare const AnchorIcon: react.FC<IconProps>;

declare const ArchiveIcon: react.FC<IconProps>;

declare const Asterisk01Icon: react.FC<IconProps>;

declare const Asterisk02Icon: react.FC<IconProps>;

declare const AtSignIcon: react.FC<IconProps>;

declare const BookmarkAddIcon: react.FC<IconProps>;

declare const BookmarkCheckIcon: react.FC<IconProps>;

declare const BookmarkMinusIcon: react.FC<IconProps>;

declare const BookmarkXIcon: react.FC<IconProps>;

declare const BookmarkIcon: react.FC<IconProps>;

declare const Building01Icon: react.FC<IconProps>;

declare const Building02Icon: react.FC<IconProps>;

declare const Building03Icon: react.FC<IconProps>;

declare const Building04Icon: react.FC<IconProps>;

declare const Building05Icon: react.FC<IconProps>;

declare const Building06Icon: react.FC<IconProps>;

declare const Building07Icon: react.FC<IconProps>;

declare const Building08Icon: react.FC<IconProps>;

declare const CheckCircleBrokenIcon: react.FC<IconProps>;

declare const CheckCircleIcon: react.FC<IconProps>;

declare const CheckDone01Icon: react.FC<IconProps>;

declare const CheckDone02Icon: react.FC<IconProps>;

declare const CheckHeartIcon: react.FC<IconProps>;

declare const CheckSquareBrokenIcon: react.FC<IconProps>;

declare const CheckSquareIcon: react.FC<IconProps>;

declare const CheckVerified01Icon: react.FC<IconProps>;

declare const CheckVerified02Icon: react.FC<IconProps>;

declare const CheckVerified03Icon: react.FC<IconProps>;

declare const CheckIcon: react.FC<IconProps>;

declare const CloudBlank01Icon: react.FC<IconProps>;

declare const CloudBlank02Icon: react.FC<IconProps>;

declare const Copy01Icon: react.FC<IconProps>;

declare const Copy02Icon: react.FC<IconProps>;

declare const Copy03Icon: react.FC<IconProps>;

declare const Copy04Icon: react.FC<IconProps>;

declare const Copy05Icon: react.FC<IconProps>;

declare const Copy06Icon: react.FC<IconProps>;

declare const Copy07Icon: react.FC<IconProps>;

declare const Divide01Icon: react.FC<IconProps>;

declare const Divide02Icon: react.FC<IconProps>;

declare const Divide03Icon: react.FC<IconProps>;

declare const DotCircleIcon: react.FC<IconProps>;

declare const DotIcon: react.FC<IconProps>;

declare const DotsGridIcon: react.FC<IconProps>;

declare const DotsHorizontalIcon: react.FC<IconProps>;

declare const DotsVerticalIcon: react.FC<IconProps>;

declare const Download01Icon: react.FC<IconProps>;

declare const Download02Icon: react.FC<IconProps>;

declare const Download03Icon: react.FC<IconProps>;

declare const Download04Icon: react.FC<IconProps>;

declare const DownloadCloud01Icon: react.FC<IconProps>;

declare const DownloadCloud02Icon: react.FC<IconProps>;

declare const Edit01Icon: react.FC<IconProps>;

declare const Edit02Icon: react.FC<IconProps>;

declare const Edit03Icon: react.FC<IconProps>;

declare const Edit04Icon: react.FC<IconProps>;

declare const Edit05Icon: react.FC<IconProps>;

declare const EqualNotIcon: react.FC<IconProps>;

declare const EqualIcon: react.FC<IconProps>;

declare const EyeOffIcon: react.FC<IconProps>;

declare const EyeIcon: react.FC<IconProps>;

declare const FilterFunnel01Icon: react.FC<IconProps>;

declare const FilterFunnel02Icon: react.FC<IconProps>;

declare const FilterLinesIcon: react.FC<IconProps>;

declare const GoogleChromeIcon: react.FC<IconProps>;

declare const Hash01Icon: react.FC<IconProps>;

declare const Hash02Icon: react.FC<IconProps>;

declare const HeartCircleIcon: react.FC<IconProps>;

declare const HeartHandIcon: react.FC<IconProps>;

declare const HeartHexagonIcon: react.FC<IconProps>;

declare const HeartOctagonIcon: react.FC<IconProps>;

declare const HeartRoundedIcon: react.FC<IconProps>;

declare const HeartSquareIcon: react.FC<IconProps>;

declare const HeartIcon: react.FC<IconProps>;

declare const HeartsIcon: react.FC<IconProps>;

declare const HelpCircleIcon: react.FC<IconProps>;

declare const HelpHexagonIcon: react.FC<IconProps>;

declare const HelpOctagonIcon: react.FC<IconProps>;

declare const HelpSquareIcon: react.FC<IconProps>;

declare const Home01Icon: react.FC<IconProps>;

declare const Home02Icon: react.FC<IconProps>;

declare const Home03Icon: react.FC<IconProps>;

declare const Home04Icon: react.FC<IconProps>;

declare const Home05Icon: react.FC<IconProps>;

declare const HomeLineIcon: react.FC<IconProps>;

declare const HomeSmileIcon: react.FC<IconProps>;

declare const InfoCircleIcon: react.FC<IconProps>;

declare const InfoHexagonIcon: react.FC<IconProps>;

declare const InfoOctagonIcon: react.FC<IconProps>;

declare const InfoSquareIcon: react.FC<IconProps>;

declare const LifeBuoy01Icon: react.FC<IconProps>;

declare const LifeBuoy02Icon: react.FC<IconProps>;

declare const Link01Icon: react.FC<IconProps>;

declare const Link02Icon: react.FC<IconProps>;

declare const Link03Icon: react.FC<IconProps>;

declare const Link04Icon: react.FC<IconProps>;

declare const Link05Icon: react.FC<IconProps>;

declare const LinkBroken01Icon: react.FC<IconProps>;

declare const LinkBroken02Icon: react.FC<IconProps>;

declare const LinkExternal01Icon: react.FC<IconProps>;

declare const LinkExternal02Icon: react.FC<IconProps>;

declare const Loading01Icon: react.FC<IconProps>;

declare const Loading02Icon: react.FC<IconProps>;

declare const Loading03Icon: react.FC<IconProps>;

declare const LogIn01Icon: react.FC<IconProps>;

declare const LogIn02Icon: react.FC<IconProps>;

declare const LogIn03Icon: react.FC<IconProps>;

declare const LogIn04Icon: react.FC<IconProps>;

declare const LogOut01Icon: react.FC<IconProps>;

declare const LogOut02Icon: react.FC<IconProps>;

declare const LogOut03Icon: react.FC<IconProps>;

declare const LogOut04Icon: react.FC<IconProps>;

declare const MedicalCircleIcon: react.FC<IconProps>;

declare const MedicalCrossIcon: react.FC<IconProps>;

declare const MedicalSquareIcon: react.FC<IconProps>;

declare const Menu01Icon: react.FC<IconProps>;

declare const Menu02Icon: react.FC<IconProps>;

declare const Menu03Icon: react.FC<IconProps>;

declare const Menu04Icon: react.FC<IconProps>;

declare const Menu05Icon: react.FC<IconProps>;

declare const MinusCircleIcon: react.FC<IconProps>;

declare const MinusSquareIcon: react.FC<IconProps>;

declare const MinusIcon: react.FC<IconProps>;

declare const Percent01Icon: react.FC<IconProps>;

declare const Percent02Icon: react.FC<IconProps>;

declare const Percent03Icon: react.FC<IconProps>;

declare const Pin01Icon: react.FC<IconProps>;

declare const Pin02Icon: react.FC<IconProps>;

declare const PlaceholderIcon: react.FC<IconProps>;

declare const PlusCircleIcon: react.FC<IconProps>;

declare const PlusSquareIcon: react.FC<IconProps>;

declare const PlusIcon: react.FC<IconProps>;

declare const Save01Icon: react.FC<IconProps>;

declare const Save02Icon: react.FC<IconProps>;

declare const Save03Icon: react.FC<IconProps>;

declare const SearchLgIcon: react.FC<IconProps>;

declare const SearchMdIcon: react.FC<IconProps>;

declare const SearchRefractionIcon: react.FC<IconProps>;

declare const SearchSmIcon: react.FC<IconProps>;

declare const Settings01Icon: react.FC<IconProps>;

declare const Settings02Icon: react.FC<IconProps>;

declare const Settings03Icon: react.FC<IconProps>;

declare const Settings04Icon: react.FC<IconProps>;

declare const Share01Icon: react.FC<IconProps>;

declare const Share02Icon: react.FC<IconProps>;

declare const Share03Icon: react.FC<IconProps>;

declare const Share04Icon: react.FC<IconProps>;

declare const Share05Icon: react.FC<IconProps>;

declare const Share06Icon: react.FC<IconProps>;

declare const Share07Icon: react.FC<IconProps>;

declare const SlashCircle01Icon: react.FC<IconProps>;

declare const SlashCircle02Icon: react.FC<IconProps>;

declare const SlashDividerIcon: react.FC<IconProps>;

declare const SlashOctagonIcon: react.FC<IconProps>;

declare const Speedometer01Icon: react.FC<IconProps>;

declare const Speedometer02Icon: react.FC<IconProps>;

declare const Speedometer03Icon: react.FC<IconProps>;

declare const Speedometer04Icon: react.FC<IconProps>;

declare const Target01Icon: react.FC<IconProps>;

declare const Target02Icon: react.FC<IconProps>;

declare const Target03Icon: react.FC<IconProps>;

declare const Target04Icon: react.FC<IconProps>;

declare const Target05Icon: react.FC<IconProps>;

declare const TickCircleIcon: react.FC<IconProps>;

declare const TickIcon: react.FC<IconProps>;

declare const Toggle01LeftIcon: react.FC<IconProps>;

declare const Toggle01RightIcon: react.FC<IconProps>;

declare const Toggle02LeftIcon: react.FC<IconProps>;

declare const Toggle02RightIcon: react.FC<IconProps>;

declare const Toggle03LeftIcon: react.FC<IconProps>;

declare const Toggle03RightIcon: react.FC<IconProps>;

declare const Tool01Icon: react.FC<IconProps>;

declare const Tool02Icon: react.FC<IconProps>;

declare const Translate01Icon: react.FC<IconProps>;

declare const Translate02Icon: react.FC<IconProps>;

declare const Trash01Icon: react.FC<IconProps>;

declare const Trash02Icon: react.FC<IconProps>;

declare const Trash03Icon: react.FC<IconProps>;

declare const Trash04Icon: react.FC<IconProps>;

declare const Upload01Icon: react.FC<IconProps>;

declare const Upload02Icon: react.FC<IconProps>;

declare const Upload03Icon: react.FC<IconProps>;

declare const Upload04Icon: react.FC<IconProps>;

declare const UploadCloud01Icon: react.FC<IconProps>;

declare const UploadCloud02Icon: react.FC<IconProps>;

declare const VirusIcon: react.FC<IconProps>;

declare const XCircleIcon: react.FC<IconProps>;

declare const XCloseIcon: react.FC<IconProps>;

declare const XSquareIcon: react.FC<IconProps>;

declare const XIcon: react.FC<IconProps>;

declare const ZapCircleIcon: react.FC<IconProps>;

declare const ZapFastIcon: react.FC<IconProps>;

declare const ZapOffIcon: react.FC<IconProps>;

declare const ZapSquareIcon: react.FC<IconProps>;

declare const ZapIcon: react.FC<IconProps>;

declare const ArrowBlockDownIcon: react.FC<IconProps>;

declare const ArrowBlockLeftIcon: react.FC<IconProps>;

declare const ArrowBlockRightIcon: react.FC<IconProps>;

declare const ArrowBlockUpIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenDownLeftIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenDownRightIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenDownIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenLeftIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenRightIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenUpLeftIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenUpRightIcon: react.FC<IconProps>;

declare const ArrowCircleBrokenUpIcon: react.FC<IconProps>;

declare const ArrowCircleDownLeftIcon: react.FC<IconProps>;

declare const ArrowCircleDownRightIcon: react.FC<IconProps>;

declare const ArrowCircleDownIcon: react.FC<IconProps>;

declare const ArrowCircleLeftIcon: react.FC<IconProps>;

declare const ArrowCircleRightIcon: react.FC<IconProps>;

declare const ArrowCircleUpLeftIcon: react.FC<IconProps>;

declare const ArrowCircleUpRightIcon: react.FC<IconProps>;

declare const ArrowCircleUpIcon: react.FC<IconProps>;

declare const ArrowDownLeftIcon: react.FC<IconProps>;

declare const ArrowDownRightIcon: react.FC<IconProps>;

declare const ArrowDownIcon: react.FC<IconProps>;

declare const ArrowLeftIcon: react.FC<IconProps>;

declare const ArrowNarrowDownLeftIcon: react.FC<IconProps>;

declare const ArrowNarrowDownRightIcon: react.FC<IconProps>;

declare const ArrowNarrowDownIcon: react.FC<IconProps>;

declare const ArrowNarrowLeftIcon: react.FC<IconProps>;

declare const ArrowNarrowRightIcon: react.FC<IconProps>;

declare const ArrowNarrowUpLeftIcon: react.FC<IconProps>;

declare const ArrowNarrowUpRightIcon: react.FC<IconProps>;

declare const ArrowNarrowUpIcon: react.FC<IconProps>;

declare const ArrowRightIcon: react.FC<IconProps>;

declare const ArrowSquareDownLeftIcon: react.FC<IconProps>;

declare const ArrowSquareDownRightIcon: react.FC<IconProps>;

declare const ArrowSquareDownIcon: react.FC<IconProps>;

declare const ArrowSquareLeftIcon: react.FC<IconProps>;

declare const ArrowSquareRightIcon: react.FC<IconProps>;

declare const ArrowSquareUpLeftIcon: react.FC<IconProps>;

declare const ArrowSquareUpRightIcon: react.FC<IconProps>;

declare const ArrowSquareUpIcon: react.FC<IconProps>;

declare const ArrowUpLeftIcon: react.FC<IconProps>;

declare const ArrowUpRightIcon: react.FC<IconProps>;

declare const ArrowUpIcon: react.FC<IconProps>;

declare const ArrowsDownIcon: react.FC<IconProps>;

declare const ArrowsLeftIcon: react.FC<IconProps>;

declare const ArrowsRightIcon: react.FC<IconProps>;

declare const ArrowsTriangleIcon: react.FC<IconProps>;

declare const ArrowsUpIcon: react.FC<IconProps>;

declare const ChevronDownDoubleIcon: react.FC<IconProps>;

declare const ChevronDownIcon: react.FC<IconProps>;

declare const ChevronLeftDoubleIcon: react.FC<IconProps>;

declare const ChevronLeftIcon: react.FC<IconProps>;

declare const ChevronRightDoubleIcon: react.FC<IconProps>;

declare const ChevronRightIcon: react.FC<IconProps>;

declare const ChevronSelectorHorizontalIcon: react.FC<IconProps>;

declare const ChevronSelectorVerticalIcon: react.FC<IconProps>;

declare const ChevronUpDoubleIcon: react.FC<IconProps>;

declare const ChevronUpIcon: react.FC<IconProps>;

declare const CornerDownLeftIcon: react.FC<IconProps>;

declare const CornerDownRightIcon: react.FC<IconProps>;

declare const CornerLeftDownIcon: react.FC<IconProps>;

declare const CornerLeftUpIcon: react.FC<IconProps>;

declare const CornerRightDownIcon: react.FC<IconProps>;

declare const CornerRightUpIcon: react.FC<IconProps>;

declare const CornerUpLeftIcon: react.FC<IconProps>;

declare const CornerUpRightIcon: react.FC<IconProps>;

declare const Expand01Icon: react.FC<IconProps>;

declare const Expand02Icon: react.FC<IconProps>;

declare const Expand03Icon: react.FC<IconProps>;

declare const Expand04Icon: react.FC<IconProps>;

declare const Expand05Icon: react.FC<IconProps>;

declare const Expand06Icon: react.FC<IconProps>;

declare const FlipBackwardIcon: react.FC<IconProps>;

declare const FlipForwardIcon: react.FC<IconProps>;

declare const InfinityIcon: react.FC<IconProps>;

declare const RefreshCcw01Icon: react.FC<IconProps>;

declare const RefreshCcw02Icon: react.FC<IconProps>;

declare const RefreshCcw03Icon: react.FC<IconProps>;

declare const RefreshCcw04Icon: react.FC<IconProps>;

declare const RefreshCcw05Icon: react.FC<IconProps>;

declare const RefreshCw01Icon: react.FC<IconProps>;

declare const RefreshCw02Icon: react.FC<IconProps>;

declare const RefreshCw03Icon: react.FC<IconProps>;

declare const RefreshCw04Icon: react.FC<IconProps>;

declare const RefreshCw05Icon: react.FC<IconProps>;

declare const ReverseLeftIcon: react.FC<IconProps>;

declare const ReverseRightIcon: react.FC<IconProps>;

declare const SwitchHorizontal01Icon: react.FC<IconProps>;

declare const SwitchHorizontal02Icon: react.FC<IconProps>;

declare const SwitchVertical01Icon: react.FC<IconProps>;

declare const SwitchVertical02Icon: react.FC<IconProps>;

declare const AlertCircleIcon: react.FC<IconProps>;

declare const AlertHexagonIcon: react.FC<IconProps>;

declare const AlertOctagonIcon: react.FC<IconProps>;

declare const AlertSquareIcon: react.FC<IconProps>;

declare const AlertTriangleIcon: react.FC<IconProps>;

declare const Announcement01Icon: react.FC<IconProps>;

declare const Announcement02Icon: react.FC<IconProps>;

declare const Announcement03Icon: react.FC<IconProps>;

declare const Bell01Icon: react.FC<IconProps>;

declare const Bell02Icon: react.FC<IconProps>;

declare const Bell03Icon: react.FC<IconProps>;

declare const Bell04Icon: react.FC<IconProps>;

declare const BellMinusIcon: react.FC<IconProps>;

declare const BellOff01Icon: react.FC<IconProps>;

declare const BellOff02Icon: react.FC<IconProps>;

declare const BellOff03Icon: react.FC<IconProps>;

declare const BellPlusIcon: react.FC<IconProps>;

declare const BellRinging01Icon: react.FC<IconProps>;

declare const BellRinging02Icon: react.FC<IconProps>;

declare const BellRinging03Icon: react.FC<IconProps>;

declare const BellRinging04Icon: react.FC<IconProps>;

declare const NotificationBoxIcon: react.FC<IconProps>;

declare const NotificationMessageIcon: react.FC<IconProps>;

declare const NotificationTextIcon: react.FC<IconProps>;

declare const ThumbsDownIcon: react.FC<IconProps>;

declare const ThumbsUpIcon: react.FC<IconProps>;

declare const AnnotationAlertIcon: react.FC<IconProps>;

declare const AnnotationCheckIcon: react.FC<IconProps>;

declare const AnnotationDotsIcon: react.FC<IconProps>;

declare const AnnotationHeartIcon: react.FC<IconProps>;

declare const AnnotationInfoIcon: react.FC<IconProps>;

declare const AnnotationPlusIcon: react.FC<IconProps>;

declare const AnnotationQuestionIcon: react.FC<IconProps>;

declare const AnnotationXIcon: react.FC<IconProps>;

declare const AnnotationIcon: react.FC<IconProps>;

declare const Inbox01Icon: react.FC<IconProps>;

declare const Inbox02Icon: react.FC<IconProps>;

declare const Mail01Icon: react.FC<IconProps>;

declare const Mail02Icon: react.FC<IconProps>;

declare const Mail03Icon: react.FC<IconProps>;

declare const Mail04Icon: react.FC<IconProps>;

declare const Mail05Icon: react.FC<IconProps>;

declare const MessageAlertCircleIcon: react.FC<IconProps>;

declare const MessageAlertSquareIcon: react.FC<IconProps>;

declare const MessageChatCircleIcon: react.FC<IconProps>;

declare const MessageChatSquareIcon: react.FC<IconProps>;

declare const MessageCheckCircleIcon: react.FC<IconProps>;

declare const MessageCheckSquareIcon: react.FC<IconProps>;

declare const MessageCircle01Icon: react.FC<IconProps>;

declare const MessageCircle02Icon: react.FC<IconProps>;

declare const MessageDotsCircleIcon: react.FC<IconProps>;

declare const MessageDotsSquareIcon: react.FC<IconProps>;

declare const MessageHeartCircleIcon: react.FC<IconProps>;

declare const MessageHeartSquareIcon: react.FC<IconProps>;

declare const MessageNotificationCircleIcon: react.FC<IconProps>;

declare const MessageNotificationSquareIcon: react.FC<IconProps>;

declare const MessagePlusCircleIcon: react.FC<IconProps>;

declare const MessagePlusSquareIcon: react.FC<IconProps>;

declare const MessageQuestionCircleIcon: react.FC<IconProps>;

declare const MessageQuestionSquareIcon: react.FC<IconProps>;

declare const MessageSmileCircleIcon: react.FC<IconProps>;

declare const MessageSmileSquareIcon: react.FC<IconProps>;

declare const MessageSquare01Icon: react.FC<IconProps>;

declare const MessageSquare02Icon: react.FC<IconProps>;

declare const MessageTextCircle01Icon: react.FC<IconProps>;

declare const MessageTextCircle02Icon: react.FC<IconProps>;

declare const MessageTextSquare01Icon: react.FC<IconProps>;

declare const MessageTextSquare02Icon: react.FC<IconProps>;

declare const MessageXCircleIcon: react.FC<IconProps>;

declare const MessageXSquareIcon: react.FC<IconProps>;

declare const PhoneCall01Icon: react.FC<IconProps>;

declare const PhoneCall02Icon: react.FC<IconProps>;

declare const PhoneHangUpIcon: react.FC<IconProps>;

declare const PhoneIncoming01Icon: react.FC<IconProps>;

declare const PhoneIncoming02Icon: react.FC<IconProps>;

declare const PhoneOutgoing01Icon: react.FC<IconProps>;

declare const PhoneOutgoing02Icon: react.FC<IconProps>;

declare const PhonePauseIcon: react.FC<IconProps>;

declare const PhonePlusIcon: react.FC<IconProps>;

declare const PhoneXIcon: react.FC<IconProps>;

declare const PhoneIcon: react.FC<IconProps>;

declare const Send01Icon: react.FC<IconProps>;

declare const Send02Icon: react.FC<IconProps>;

declare const Send03Icon: react.FC<IconProps>;

declare const BarChart01Icon: react.FC<IconProps>;

declare const BarChart02Icon: react.FC<IconProps>;

declare const BarChart03Icon: react.FC<IconProps>;

declare const BarChart04Icon: react.FC<IconProps>;

declare const BarChart05Icon: react.FC<IconProps>;

declare const BarChart06Icon: react.FC<IconProps>;

declare const BarChart07Icon: react.FC<IconProps>;

declare const BarChart08Icon: react.FC<IconProps>;

declare const BarChart09Icon: react.FC<IconProps>;

declare const BarChart10Icon: react.FC<IconProps>;

declare const BarChart11Icon: react.FC<IconProps>;

declare const BarChart12Icon: react.FC<IconProps>;

declare const BarChartCircle01Icon: react.FC<IconProps>;

declare const BarChartCircle02Icon: react.FC<IconProps>;

declare const BarChartCircle03Icon: react.FC<IconProps>;

declare const BarChartSquare01Icon: react.FC<IconProps>;

declare const BarChartSquare02Icon: react.FC<IconProps>;

declare const BarChartSquare03Icon: react.FC<IconProps>;

declare const BarChartSquareDownIcon: react.FC<IconProps>;

declare const BarChartSquareMinusIcon: react.FC<IconProps>;

declare const BarChartSquarePlusIcon: react.FC<IconProps>;

declare const BarChartSquareUpIcon: react.FC<IconProps>;

declare const BarLineChartIcon: react.FC<IconProps>;

declare const ChartBreakoutCircleIcon: react.FC<IconProps>;

declare const ChartBreakoutSquareIcon: react.FC<IconProps>;

declare const HorizontalBarChart01Icon: react.FC<IconProps>;

declare const HorizontalBarChart02Icon: react.FC<IconProps>;

declare const HorizontalBarChart03Icon: react.FC<IconProps>;

declare const LineChartDown01Icon: react.FC<IconProps>;

declare const LineChartDown02Icon: react.FC<IconProps>;

declare const LineChartDown03Icon: react.FC<IconProps>;

declare const LineChartDown04Icon: react.FC<IconProps>;

declare const LineChartDown05Icon: react.FC<IconProps>;

declare const LineChartUp01Icon: react.FC<IconProps>;

declare const LineChartUp02Icon: react.FC<IconProps>;

declare const LineChartUp03Icon: react.FC<IconProps>;

declare const LineChartUp04Icon: react.FC<IconProps>;

declare const LineChartUp05Icon: react.FC<IconProps>;

declare const PieChart01Icon: react.FC<IconProps>;

declare const PieChart02Icon: react.FC<IconProps>;

declare const PieChart03Icon: react.FC<IconProps>;

declare const PieChart04Icon: react.FC<IconProps>;

declare const PresentationChart01Icon: react.FC<IconProps>;

declare const PresentationChart02Icon: react.FC<IconProps>;

declare const PresentationChart03Icon: react.FC<IconProps>;

declare const TrendDown01Icon: react.FC<IconProps>;

declare const TrendDown02Icon: react.FC<IconProps>;

declare const TrendUp01Icon: react.FC<IconProps>;

declare const TrendUp02Icon: react.FC<IconProps>;

declare const BracketsCheckIcon: react.FC<IconProps>;

declare const BracketsEllipsesIcon: react.FC<IconProps>;

declare const BracketsMinusIcon: react.FC<IconProps>;

declare const BracketsPlusIcon: react.FC<IconProps>;

declare const BracketsSlashIcon: react.FC<IconProps>;

declare const BracketsXIcon: react.FC<IconProps>;

declare const BracketsIcon: react.FC<IconProps>;

declare const BrowserIcon: react.FC<IconProps>;

declare const Code01Icon: react.FC<IconProps>;

declare const Code02Icon: react.FC<IconProps>;

declare const CodeBrowserIcon: react.FC<IconProps>;

declare const CodeCircle01Icon: react.FC<IconProps>;

declare const CodeCircle02Icon: react.FC<IconProps>;

declare const CodeCircle03Icon: react.FC<IconProps>;

declare const CodeSquare01Icon: react.FC<IconProps>;

declare const CodeSquare02Icon: react.FC<IconProps>;

declare const CodepenIcon: react.FC<IconProps>;

declare const ContainerIcon: react.FC<IconProps>;

declare const CpuChip01Icon: react.FC<IconProps>;

declare const CpuChip02Icon: react.FC<IconProps>;

declare const DataIcon: react.FC<IconProps>;

declare const Database01Icon: react.FC<IconProps>;

declare const Database02Icon: react.FC<IconProps>;

declare const Database03Icon: react.FC<IconProps>;

declare const Dataflow01Icon: react.FC<IconProps>;

declare const Dataflow02Icon: react.FC<IconProps>;

declare const Dataflow03Icon: react.FC<IconProps>;

declare const Dataflow04Icon: react.FC<IconProps>;

declare const FileCode01Icon: react.FC<IconProps>;

declare const FileCode02Icon: react.FC<IconProps>;

declare const FolderCodeIcon: react.FC<IconProps>;

declare const GitBranch01Icon: react.FC<IconProps>;

declare const GitBranch02Icon: react.FC<IconProps>;

declare const GitCommitIcon: react.FC<IconProps>;

declare const GitMergeIcon: react.FC<IconProps>;

declare const GitPullRequestIcon: react.FC<IconProps>;

declare const PackageCheckIcon: react.FC<IconProps>;

declare const PackageMinusIcon: react.FC<IconProps>;

declare const PackagePlusIcon: react.FC<IconProps>;

declare const PackageSearchIcon: react.FC<IconProps>;

declare const PackageXIcon: react.FC<IconProps>;

declare const PackageIcon: react.FC<IconProps>;

declare const PuzzlePiece01Icon: react.FC<IconProps>;

declare const PuzzlePiece02Icon: react.FC<IconProps>;

declare const QrCode01Icon: react.FC<IconProps>;

declare const QrCode02Icon: react.FC<IconProps>;

declare const Server01Icon: react.FC<IconProps>;

declare const Server02Icon: react.FC<IconProps>;

declare const Server03Icon: react.FC<IconProps>;

declare const Server04Icon: react.FC<IconProps>;

declare const Server05Icon: react.FC<IconProps>;

declare const Server06Icon: react.FC<IconProps>;

declare const TerminalBrowserIcon: react.FC<IconProps>;

declare const TerminalCircleIcon: react.FC<IconProps>;

declare const TerminalSquareIcon: react.FC<IconProps>;

declare const TerminalIcon: react.FC<IconProps>;

declare const VariableIcon: react.FC<IconProps>;

declare const AlignCenterIcon: react.FC<IconProps>;

declare const AlignJustifyIcon: react.FC<IconProps>;

declare const AlignLeftIcon: react.FC<IconProps>;

declare const AlignRightIcon: react.FC<IconProps>;

declare const Attachment01Icon: react.FC<IconProps>;

declare const Attachment02Icon: react.FC<IconProps>;

declare const BezierCurve01Icon: react.FC<IconProps>;

declare const BezierCurve02Icon: react.FC<IconProps>;

declare const BezierCurve03Icon: react.FC<IconProps>;

declare const Bold01Icon: react.FC<IconProps>;

declare const Bold02Icon: react.FC<IconProps>;

declare const BoldSquareIcon: react.FC<IconProps>;

declare const Brush01Icon: react.FC<IconProps>;

declare const Brush02Icon: react.FC<IconProps>;

declare const Brush03Icon: react.FC<IconProps>;

declare const CircleCutIcon: react.FC<IconProps>;

declare const CodeSnippet01Icon: react.FC<IconProps>;

declare const CodeSnippet02Icon: react.FC<IconProps>;

declare const ColorsIcon: react.FC<IconProps>;

declare const CommandIcon: react.FC<IconProps>;

declare const Contrast01Icon: react.FC<IconProps>;

declare const Contrast02Icon: react.FC<IconProps>;

declare const Contrast03Icon: react.FC<IconProps>;

declare const Crop01Icon: react.FC<IconProps>;

declare const Crop02Icon: react.FC<IconProps>;

declare const Cursor01Icon: react.FC<IconProps>;

declare const Cursor02Icon: react.FC<IconProps>;

declare const Cursor03Icon: react.FC<IconProps>;

declare const Cursor04Icon: react.FC<IconProps>;

declare const CursorBoxIcon: react.FC<IconProps>;

declare const CursorClick01Icon: react.FC<IconProps>;

declare const CursorClick02Icon: react.FC<IconProps>;

declare const DeleteIcon: react.FC<IconProps>;

declare const Dotpoints01Icon: react.FC<IconProps>;

declare const Dotpoints02Icon: react.FC<IconProps>;

declare const DropIcon: react.FC<IconProps>;

declare const DropperIcon: react.FC<IconProps>;

declare const EraserIcon: react.FC<IconProps>;

declare const FeatherIcon: react.FC<IconProps>;

declare const FigmaIcon: react.FC<IconProps>;

declare const FramerIcon: react.FC<IconProps>;

declare const HandIcon: react.FC<IconProps>;

declare const Heading01Icon: react.FC<IconProps>;

declare const Heading02Icon: react.FC<IconProps>;

declare const HeadingSquareIcon: react.FC<IconProps>;

declare const ImageIndentLeftIcon: react.FC<IconProps>;

declare const ImageIndentRightIcon: react.FC<IconProps>;

declare const Italic01Icon: react.FC<IconProps>;

declare const Italic02Icon: react.FC<IconProps>;

declare const ItalicSquareIcon: react.FC<IconProps>;

declare const LeftIndent01Icon: react.FC<IconProps>;

declare const LeftIndent02Icon: react.FC<IconProps>;

declare const LetterSpacing01Icon: react.FC<IconProps>;

declare const LetterSpacing02Icon: react.FC<IconProps>;

declare const LineHeightIcon: react.FC<IconProps>;

declare const MagicWand01Icon: react.FC<IconProps>;

declare const MagicWand02Icon: react.FC<IconProps>;

declare const MoveIcon: react.FC<IconProps>;

declare const PaintPourIcon: react.FC<IconProps>;

declare const PaintIcon: react.FC<IconProps>;

declare const PaletteIcon: react.FC<IconProps>;

declare const ParagraphSpacingIcon: react.FC<IconProps>;

declare const ParagraphWrapIcon: react.FC<IconProps>;

declare const PenTool01Icon: react.FC<IconProps>;

declare const PenTool02Icon: react.FC<IconProps>;

declare const PenToolMinusIcon: react.FC<IconProps>;

declare const PenToolPlusIcon: react.FC<IconProps>;

declare const Pencil01Icon: react.FC<IconProps>;

declare const Pencil02Icon: react.FC<IconProps>;

declare const PencilLineIcon: react.FC<IconProps>;

declare const Perspective01Icon: react.FC<IconProps>;

declare const Perspective02Icon: react.FC<IconProps>;

declare const Pilcrow01Icon: react.FC<IconProps>;

declare const Pilcrow02Icon: react.FC<IconProps>;

declare const PilcrowSquareIcon: react.FC<IconProps>;

declare const Reflect01Icon: react.FC<IconProps>;

declare const Reflect02Icon: react.FC<IconProps>;

declare const RightIndent01Icon: react.FC<IconProps>;

declare const RightIndent02Icon: react.FC<IconProps>;

declare const RollerBrushIcon: react.FC<IconProps>;

declare const Scale01Icon: react.FC<IconProps>;

declare const Scale02Icon: react.FC<IconProps>;

declare const Scale03Icon: react.FC<IconProps>;

declare const Scissors01Icon: react.FC<IconProps>;

declare const Scissors02Icon: react.FC<IconProps>;

declare const ScissorsCut01Icon: react.FC<IconProps>;

declare const ScissorsCut02Icon: react.FC<IconProps>;

declare const SkewIcon: react.FC<IconProps>;

declare const Strikethrough01Icon: react.FC<IconProps>;

declare const Strikethrough02Icon: react.FC<IconProps>;

declare const StrikethroughSquareIcon: react.FC<IconProps>;

declare const SubscriptIcon: react.FC<IconProps>;

declare const TextInputIcon: react.FC<IconProps>;

declare const TransformIcon: react.FC<IconProps>;

declare const Type01Icon: react.FC<IconProps>;

declare const Type02Icon: react.FC<IconProps>;

declare const TypeSquareIcon: react.FC<IconProps>;

declare const TypeStrikethrough01Icon: react.FC<IconProps>;

declare const TypeStrikethrough02Icon: react.FC<IconProps>;

declare const Underline01Icon: react.FC<IconProps>;

declare const Underline02Icon: react.FC<IconProps>;

declare const UnderlineSquareIcon: react.FC<IconProps>;

declare const ZoomInIcon: react.FC<IconProps>;

declare const ZoomOutIcon: react.FC<IconProps>;

declare const Atom01Icon: react.FC<IconProps>;

declare const Atom02Icon: react.FC<IconProps>;

declare const Award01Icon: react.FC<IconProps>;

declare const Award02Icon: react.FC<IconProps>;

declare const Award03Icon: react.FC<IconProps>;

declare const Award04Icon: react.FC<IconProps>;

declare const Award05Icon: react.FC<IconProps>;

declare const BackpackIcon: react.FC<IconProps>;

declare const Beaker01Icon: react.FC<IconProps>;

declare const Beaker02Icon: react.FC<IconProps>;

declare const BookClosedIcon: react.FC<IconProps>;

declare const BookOpen01Icon: react.FC<IconProps>;

declare const BookOpen02Icon: react.FC<IconProps>;

declare const Briefcase01Icon: react.FC<IconProps>;

declare const Briefcase02Icon: react.FC<IconProps>;

declare const CalculatorIcon: react.FC<IconProps>;

declare const Certificate01Icon: react.FC<IconProps>;

declare const Certificate02Icon: react.FC<IconProps>;

declare const CompassIcon: react.FC<IconProps>;

declare const Glasses01Icon: react.FC<IconProps>;

declare const Glasses02Icon: react.FC<IconProps>;

declare const GlobeSlated01Icon: react.FC<IconProps>;

declare const GlobeSlated02Icon: react.FC<IconProps>;

declare const GraduationHat01Icon: react.FC<IconProps>;

declare const GraduationHat02Icon: react.FC<IconProps>;

declare const MicroscopeIcon: react.FC<IconProps>;

declare const RulerIcon: react.FC<IconProps>;

declare const StandIcon: react.FC<IconProps>;

declare const TelescopeIcon: react.FC<IconProps>;

declare const Trophy01Icon: react.FC<IconProps>;

declare const Trophy02Icon: react.FC<IconProps>;

declare const BoxIcon: react.FC<IconProps>;

declare const ClipboardAttachmentIcon: react.FC<IconProps>;

declare const ClipboardCheckIcon: react.FC<IconProps>;

declare const ClipboardDownloadIcon: react.FC<IconProps>;

declare const ClipboardMinusIcon: react.FC<IconProps>;

declare const ClipboardPlusIcon: react.FC<IconProps>;

declare const ClipboardXIcon: react.FC<IconProps>;

declare const ClipboardIcon: react.FC<IconProps>;

declare const File01Icon: react.FC<IconProps>;

declare const File02Icon: react.FC<IconProps>;

declare const File03Icon: react.FC<IconProps>;

declare const File04Icon: react.FC<IconProps>;

declare const File05Icon: react.FC<IconProps>;

declare const File06Icon: react.FC<IconProps>;

declare const File07Icon: react.FC<IconProps>;

declare const FileAttachment01Icon: react.FC<IconProps>;

declare const FileAttachment02Icon: react.FC<IconProps>;

declare const FileAttachment03Icon: react.FC<IconProps>;

declare const FileAttachment04Icon: react.FC<IconProps>;

declare const FileAttachment05Icon: react.FC<IconProps>;

declare const FileCheck01Icon: react.FC<IconProps>;

declare const FileCheck02Icon: react.FC<IconProps>;

declare const FileCheck03Icon: react.FC<IconProps>;

declare const FileDownload01Icon: react.FC<IconProps>;

declare const FileDownload02Icon: react.FC<IconProps>;

declare const FileDownload03Icon: react.FC<IconProps>;

declare const FileHeart01Icon: react.FC<IconProps>;

declare const FileHeart02Icon: react.FC<IconProps>;

declare const FileHeart03Icon: react.FC<IconProps>;

declare const FileMinus01Icon: react.FC<IconProps>;

declare const FileMinus02Icon: react.FC<IconProps>;

declare const FileMinus03Icon: react.FC<IconProps>;

declare const FilePlus01Icon: react.FC<IconProps>;

declare const FilePlus02Icon: react.FC<IconProps>;

declare const FilePlus03Icon: react.FC<IconProps>;

declare const FileQuestion01Icon: react.FC<IconProps>;

declare const FileQuestion02Icon: react.FC<IconProps>;

declare const FileQuestion03Icon: react.FC<IconProps>;

declare const FileSearch01Icon: react.FC<IconProps>;

declare const FileSearch02Icon: react.FC<IconProps>;

declare const FileSearch03Icon: react.FC<IconProps>;

declare const FileX01Icon: react.FC<IconProps>;

declare const FileX02Icon: react.FC<IconProps>;

declare const FileX03Icon: react.FC<IconProps>;

declare const FolderCheckIcon: react.FC<IconProps>;

declare const FolderClosedIcon: react.FC<IconProps>;

declare const FolderDownloadIcon: react.FC<IconProps>;

declare const FolderLockIcon: react.FC<IconProps>;

declare const FolderMinusIcon: react.FC<IconProps>;

declare const FolderPlusIcon: react.FC<IconProps>;

declare const FolderQuestionIcon: react.FC<IconProps>;

declare const FolderSearchIcon: react.FC<IconProps>;

declare const FolderXIcon: react.FC<IconProps>;

declare const FolderIcon: react.FC<IconProps>;

declare const PaperclipIcon: react.FC<IconProps>;

declare const StickerCircleIcon: react.FC<IconProps>;

declare const StickerSquareIcon: react.FC<IconProps>;

declare const BankNote01Icon: react.FC<IconProps>;

declare const BankNote02Icon: react.FC<IconProps>;

declare const BankNote03Icon: react.FC<IconProps>;

declare const BankIcon: react.FC<IconProps>;

declare const Coins01Icon: react.FC<IconProps>;

declare const Coins02Icon: react.FC<IconProps>;

declare const Coins03Icon: react.FC<IconProps>;

declare const Coins04Icon: react.FC<IconProps>;

declare const CoinsHandIcon: react.FC<IconProps>;

declare const CoinsStacked01Icon: react.FC<IconProps>;

declare const CoinsStacked02Icon: react.FC<IconProps>;

declare const CoinsStacked03Icon: react.FC<IconProps>;

declare const CoinsStacked04Icon: react.FC<IconProps>;

declare const CoinsSwap01Icon: react.FC<IconProps>;

declare const CoinsSwap02Icon: react.FC<IconProps>;

declare const CreditCard01Icon: react.FC<IconProps>;

declare const CreditCard02Icon: react.FC<IconProps>;

declare const CreditCardCheckIcon: react.FC<IconProps>;

declare const CreditCardDownIcon: react.FC<IconProps>;

declare const CreditCardDownloadIcon: react.FC<IconProps>;

declare const CreditCardEditIcon: react.FC<IconProps>;

declare const CreditCardLockIcon: react.FC<IconProps>;

declare const CreditCardMinusIcon: react.FC<IconProps>;

declare const CreditCardPlusIcon: react.FC<IconProps>;

declare const CreditCardRefreshIcon: react.FC<IconProps>;

declare const CreditCardSearchIcon: react.FC<IconProps>;

declare const CreditCardShieldIcon: react.FC<IconProps>;

declare const CreditCardUpIcon: react.FC<IconProps>;

declare const CreditCardUploadIcon: react.FC<IconProps>;

declare const CreditCardXIcon: react.FC<IconProps>;

declare const Cryptocurrency01Icon: react.FC<IconProps>;

declare const Cryptocurrency02Icon: react.FC<IconProps>;

declare const Cryptocurrency03Icon: react.FC<IconProps>;

declare const Cryptocurrency04Icon: react.FC<IconProps>;

declare const CurrencyBitcoinCircleIcon: react.FC<IconProps>;

declare const CurrencyBitcoinIcon: react.FC<IconProps>;

declare const CurrencyDollarCircleIcon: react.FC<IconProps>;

declare const CurrencyDollarIcon: react.FC<IconProps>;

declare const CurrencyEthereumCircleIcon: react.FC<IconProps>;

declare const CurrencyEthereumIcon: react.FC<IconProps>;

declare const CurrencyEuroCircleIcon: react.FC<IconProps>;

declare const CurrencyEuroIcon: react.FC<IconProps>;

declare const CurrencyPoundCircleIcon: react.FC<IconProps>;

declare const CurrencyPoundIcon: react.FC<IconProps>;

declare const CurrencyRubleCircleIcon: react.FC<IconProps>;

declare const CurrencyRubleIcon: react.FC<IconProps>;

declare const CurrencyRupeeCircleIcon: react.FC<IconProps>;

declare const CurrencyRupeeIcon: react.FC<IconProps>;

declare const CurrencyYenCircleIcon: react.FC<IconProps>;

declare const CurrencyYenIcon: react.FC<IconProps>;

declare const Diamond01Icon: react.FC<IconProps>;

declare const Diamond02Icon: react.FC<IconProps>;

declare const Gift01Icon: react.FC<IconProps>;

declare const Gift02Icon: react.FC<IconProps>;

declare const PiggyBank01Icon: react.FC<IconProps>;

declare const PiggyBank02Icon: react.FC<IconProps>;

declare const ReceiptCheckIcon: react.FC<IconProps>;

declare const ReceiptIcon: react.FC<IconProps>;

declare const SafeIcon: react.FC<IconProps>;

declare const Sale01Icon: react.FC<IconProps>;

declare const Sale02Icon: react.FC<IconProps>;

declare const Sale03Icon: react.FC<IconProps>;

declare const Sale04Icon: react.FC<IconProps>;

declare const Scales01Icon: react.FC<IconProps>;

declare const Scales02Icon: react.FC<IconProps>;

declare const ShoppingBag01Icon: react.FC<IconProps>;

declare const ShoppingBag02Icon: react.FC<IconProps>;

declare const ShoppingBag03Icon: react.FC<IconProps>;

declare const ShoppingCart01Icon: react.FC<IconProps>;

declare const ShoppingCart02Icon: react.FC<IconProps>;

declare const ShoppingCart03Icon: react.FC<IconProps>;

declare const Tag01Icon: react.FC<IconProps>;

declare const Tag02Icon: react.FC<IconProps>;

declare const Tag03Icon: react.FC<IconProps>;

declare const Wallet01Icon: react.FC<IconProps>;

declare const Wallet02Icon: react.FC<IconProps>;

declare const Wallet03Icon: react.FC<IconProps>;

declare const Wallet04Icon: react.FC<IconProps>;

declare const Wallet05Icon: react.FC<IconProps>;

declare const Camera01Icon: react.FC<IconProps>;

declare const Camera02Icon: react.FC<IconProps>;

declare const Camera03Icon: react.FC<IconProps>;

declare const CameraLensIcon: react.FC<IconProps>;

declare const CameraOffIcon: react.FC<IconProps>;

declare const CameraPlusIcon: react.FC<IconProps>;

declare const FlashOffIcon: react.FC<IconProps>;

declare const FlashIcon: react.FC<IconProps>;

declare const Image01Icon: react.FC<IconProps>;

declare const Image02Icon: react.FC<IconProps>;

declare const Image03Icon: react.FC<IconProps>;

declare const Image04Icon: react.FC<IconProps>;

declare const Image05Icon: react.FC<IconProps>;

declare const ImageCheckIcon: react.FC<IconProps>;

declare const ImageDownIcon: react.FC<IconProps>;

declare const ImageLeftIcon: react.FC<IconProps>;

declare const ImagePlusIcon: react.FC<IconProps>;

declare const ImageRightIcon: react.FC<IconProps>;

declare const ImageUpIcon: react.FC<IconProps>;

declare const ImageUserCheckIcon: react.FC<IconProps>;

declare const ImageUserDownIcon: react.FC<IconProps>;

declare const ImageUserLeftIcon: react.FC<IconProps>;

declare const ImageUserPlusIcon: react.FC<IconProps>;

declare const ImageUserRightIcon: react.FC<IconProps>;

declare const ImageUserUpIcon: react.FC<IconProps>;

declare const ImageUserXIcon: react.FC<IconProps>;

declare const ImageUserIcon: react.FC<IconProps>;

declare const ImageXIcon: react.FC<IconProps>;

declare const AlignBottom01Icon: react.FC<IconProps>;

declare const AlignBottom02Icon: react.FC<IconProps>;

declare const AlignHorizontalCentre01Icon: react.FC<IconProps>;

declare const AlignHorizontalCentre02Icon: react.FC<IconProps>;

declare const AlignLeft01Icon: react.FC<IconProps>;

declare const AlignLeft02Icon: react.FC<IconProps>;

declare const AlignRight01Icon: react.FC<IconProps>;

declare const AlignRight02Icon: react.FC<IconProps>;

declare const AlignTop01Icon: react.FC<IconProps>;

declare const AlignTop02Icon: react.FC<IconProps>;

declare const AlignVerticalCenter01Icon: react.FC<IconProps>;

declare const AlignVerticalCenter02Icon: react.FC<IconProps>;

declare const Columns01Icon: react.FC<IconProps>;

declare const Columns02Icon: react.FC<IconProps>;

declare const Columns03Icon: react.FC<IconProps>;

declare const DistributeSpacingHorizontalIcon: react.FC<IconProps>;

declare const DistributeSpacingVerticalIcon: react.FC<IconProps>;

declare const DividerIcon: react.FC<IconProps>;

declare const FlexAlignBottomIcon: react.FC<IconProps>;

declare const FlexAlignLeftIcon: react.FC<IconProps>;

declare const FlexAlignRightIcon: react.FC<IconProps>;

declare const FlexAlignTopIcon: react.FC<IconProps>;

declare const Grid01Icon: react.FC<IconProps>;

declare const Grid02Icon: react.FC<IconProps>;

declare const Grid03Icon: react.FC<IconProps>;

declare const GridDotsBlankIcon: react.FC<IconProps>;

declare const GridDotsBottomIcon: react.FC<IconProps>;

declare const GridDotsHorizontalCenterIcon: react.FC<IconProps>;

declare const GridDotsLeftIcon: react.FC<IconProps>;

declare const GridDotsOuterIcon: react.FC<IconProps>;

declare const GridDotsRightIcon: react.FC<IconProps>;

declare const GridDotsTopIcon: react.FC<IconProps>;

declare const GridDotsVerticalCenterIcon: react.FC<IconProps>;

declare const IntersectCircleIcon: react.FC<IconProps>;

declare const IntersectSquareIcon: react.FC<IconProps>;

declare const LayerSingleIcon: react.FC<IconProps>;

declare const LayersThree01Icon: react.FC<IconProps>;

declare const LayersThree02Icon: react.FC<IconProps>;

declare const LayersTwo01Icon: react.FC<IconProps>;

declare const LayersTwo02Icon: react.FC<IconProps>;

declare const LayoutAlt01Icon: react.FC<IconProps>;

declare const LayoutAlt02Icon: react.FC<IconProps>;

declare const LayoutAlt03Icon: react.FC<IconProps>;

declare const LayoutAlt04Icon: react.FC<IconProps>;

declare const LayoutBottomIcon: react.FC<IconProps>;

declare const LayoutGrid01Icon: react.FC<IconProps>;

declare const LayoutGrid02Icon: react.FC<IconProps>;

declare const LayoutLeftIcon: react.FC<IconProps>;

declare const LayoutRightIcon: react.FC<IconProps>;

declare const LayoutTopIcon: react.FC<IconProps>;

declare const ListIcon: react.FC<IconProps>;

declare const Maximize01Icon: react.FC<IconProps>;

declare const Maximize02Icon: react.FC<IconProps>;

declare const Minimize01Icon: react.FC<IconProps>;

declare const Minimize02Icon: react.FC<IconProps>;

declare const Rows01Icon: react.FC<IconProps>;

declare const Rows02Icon: react.FC<IconProps>;

declare const Rows03Icon: react.FC<IconProps>;

declare const SpacingHeight01Icon: react.FC<IconProps>;

declare const SpacingHeight02Icon: react.FC<IconProps>;

declare const SpacingWidth01Icon: react.FC<IconProps>;

declare const SpacingWidth02Icon: react.FC<IconProps>;

declare const TableIcon: react.FC<IconProps>;

declare const BusIcon: react.FC<IconProps>;

declare const Car01Icon: react.FC<IconProps>;

declare const Car02Icon: react.FC<IconProps>;

declare const Compass01Icon: react.FC<IconProps>;

declare const Compass02Icon: react.FC<IconProps>;

declare const Compass03Icon: react.FC<IconProps>;

declare const Flag01Icon: react.FC<IconProps>;

declare const Flag02Icon: react.FC<IconProps>;

declare const Flag03Icon: react.FC<IconProps>;

declare const Flag04Icon: react.FC<IconProps>;

declare const Flag05Icon: react.FC<IconProps>;

declare const Flag06Icon: react.FC<IconProps>;

declare const Globe01Icon: react.FC<IconProps>;

declare const Globe02Icon: react.FC<IconProps>;

declare const Globe03Icon: react.FC<IconProps>;

declare const Globe04Icon: react.FC<IconProps>;

declare const Globe05Icon: react.FC<IconProps>;

declare const Globe06Icon: react.FC<IconProps>;

declare const Luggage01Icon: react.FC<IconProps>;

declare const Luggage02Icon: react.FC<IconProps>;

declare const Luggage03Icon: react.FC<IconProps>;

declare const Map01Icon: react.FC<IconProps>;

declare const Map02Icon: react.FC<IconProps>;

declare const MarkIcon: react.FC<IconProps>;

declare const MarkerPin01Icon: react.FC<IconProps>;

declare const MarkerPin02Icon: react.FC<IconProps>;

declare const MarkerPin03Icon: react.FC<IconProps>;

declare const MarkerPin04Icon: react.FC<IconProps>;

declare const MarkerPin05Icon: react.FC<IconProps>;

declare const MarkerPin06Icon: react.FC<IconProps>;

declare const NavigationPointer01Icon: react.FC<IconProps>;

declare const NavigationPointer02Icon: react.FC<IconProps>;

declare const NavigationPointerOff01Icon: react.FC<IconProps>;

declare const NavigationPointerOff02Icon: react.FC<IconProps>;

declare const PassportIcon: react.FC<IconProps>;

declare const PlaneIcon: react.FC<IconProps>;

declare const Rocket01Icon: react.FC<IconProps>;

declare const Rocket02Icon: react.FC<IconProps>;

declare const RouteIcon: react.FC<IconProps>;

declare const Ticket01Icon: react.FC<IconProps>;

declare const Ticket02Icon: react.FC<IconProps>;

declare const TrainIcon: react.FC<IconProps>;

declare const TramIcon: react.FC<IconProps>;

declare const Truck01Icon: react.FC<IconProps>;

declare const Truck02Icon: react.FC<IconProps>;

declare const AirplayIcon: react.FC<IconProps>;

declare const AirpodsIcon: react.FC<IconProps>;

declare const BatteryCharging01Icon: react.FC<IconProps>;

declare const BatteryCharging02Icon: react.FC<IconProps>;

declare const BatteryEmptyIcon: react.FC<IconProps>;

declare const BatteryFullIcon: react.FC<IconProps>;

declare const BatteryLowIcon: react.FC<IconProps>;

declare const BatteryMidIcon: react.FC<IconProps>;

declare const BluetoothConnectIcon: react.FC<IconProps>;

declare const BluetoothOffIcon: react.FC<IconProps>;

declare const BluetoothOnIcon: react.FC<IconProps>;

declare const BluetoothSignalIcon: react.FC<IconProps>;

declare const ChromeCastIcon: react.FC<IconProps>;

declare const ClapperboardIcon: react.FC<IconProps>;

declare const Disc01Icon: react.FC<IconProps>;

declare const Disc02Icon: react.FC<IconProps>;

declare const FastBackwardIcon: react.FC<IconProps>;

declare const FastForwardIcon: react.FC<IconProps>;

declare const Film01Icon: react.FC<IconProps>;

declare const Film02Icon: react.FC<IconProps>;

declare const Film03Icon: react.FC<IconProps>;

declare const GamingPad01Icon: react.FC<IconProps>;

declare const GamingPad02Icon: react.FC<IconProps>;

declare const HardDriveIcon: react.FC<IconProps>;

declare const Headphones01Icon: react.FC<IconProps>;

declare const Headphones02Icon: react.FC<IconProps>;

declare const Keyboard01Icon: react.FC<IconProps>;

declare const Keyboard02Icon: react.FC<IconProps>;

declare const Laptop01Icon: react.FC<IconProps>;

declare const Laptop02Icon: react.FC<IconProps>;

declare const Lightbulb01Icon: react.FC<IconProps>;

declare const Lightbulb02Icon: react.FC<IconProps>;

declare const Lightbulb03Icon: react.FC<IconProps>;

declare const Lightbulb04Icon: react.FC<IconProps>;

declare const Lightbulb05Icon: react.FC<IconProps>;

declare const Microphone01Icon: react.FC<IconProps>;

declare const Microphone02Icon: react.FC<IconProps>;

declare const MicrophoneOff01Icon: react.FC<IconProps>;

declare const MicrophoneOff02Icon: react.FC<IconProps>;

declare const Modem01Icon: react.FC<IconProps>;

declare const Modem02Icon: react.FC<IconProps>;

declare const Monitor01Icon: react.FC<IconProps>;

declare const Monitor02Icon: react.FC<IconProps>;

declare const Monitor03Icon: react.FC<IconProps>;

declare const Monitor04Icon: react.FC<IconProps>;

declare const Monitor05Icon: react.FC<IconProps>;

declare const MouseIcon: react.FC<IconProps>;

declare const MusicNote01Icon: react.FC<IconProps>;

declare const MusicNote02Icon: react.FC<IconProps>;

declare const MusicNotePlusIcon: react.FC<IconProps>;

declare const PauseCircleIcon: react.FC<IconProps>;

declare const PauseSquareIcon: react.FC<IconProps>;

declare const Phone01Icon: react.FC<IconProps>;

declare const Phone02Icon: react.FC<IconProps>;

declare const PlayCircleIcon: react.FC<IconProps>;

declare const PlaySquareIcon: react.FC<IconProps>;

declare const PlayIcon: react.FC<IconProps>;

declare const PodcastIcon: react.FC<IconProps>;

declare const Power01Icon: react.FC<IconProps>;

declare const Power02Icon: react.FC<IconProps>;

declare const Power03Icon: react.FC<IconProps>;

declare const PrinterIcon: react.FC<IconProps>;

declare const Recording01Icon: react.FC<IconProps>;

declare const Recording02Icon: react.FC<IconProps>;

declare const Recording03Icon: react.FC<IconProps>;

declare const Repeat01Icon: react.FC<IconProps>;

declare const Repeat02Icon: react.FC<IconProps>;

declare const Repeat03Icon: react.FC<IconProps>;

declare const Repeat04Icon: react.FC<IconProps>;

declare const Rss01Icon: react.FC<IconProps>;

declare const Rss02Icon: react.FC<IconProps>;

declare const Shuffle01Icon: react.FC<IconProps>;

declare const Shuffle02Icon: react.FC<IconProps>;

declare const Signal01Icon: react.FC<IconProps>;

declare const Signal02Icon: react.FC<IconProps>;

declare const Signal03Icon: react.FC<IconProps>;

declare const SimcardIcon: react.FC<IconProps>;

declare const SkipBackIcon: react.FC<IconProps>;

declare const SkipForwardIcon: react.FC<IconProps>;

declare const Sliders01Icon: react.FC<IconProps>;

declare const Sliders02Icon: react.FC<IconProps>;

declare const Sliders03Icon: react.FC<IconProps>;

declare const Sliders04Icon: react.FC<IconProps>;

declare const Speaker01Icon: react.FC<IconProps>;

declare const Speaker02Icon: react.FC<IconProps>;

declare const Speaker03Icon: react.FC<IconProps>;

declare const StopCircleIcon: react.FC<IconProps>;

declare const StopSquareIcon: react.FC<IconProps>;

declare const StopIcon: react.FC<IconProps>;

declare const Tablet01Icon: react.FC<IconProps>;

declare const Tablet02Icon: react.FC<IconProps>;

declare const Tv01Icon: react.FC<IconProps>;

declare const Tv02Icon: react.FC<IconProps>;

declare const Tv03Icon: react.FC<IconProps>;

declare const UsbFlashDriveIcon: react.FC<IconProps>;

declare const VideoRecorderOffIcon: react.FC<IconProps>;

declare const VideoRecorderIcon: react.FC<IconProps>;

declare const VoicemailIcon: react.FC<IconProps>;

declare const VolumeMaxIcon: react.FC<IconProps>;

declare const VolumeMinIcon: react.FC<IconProps>;

declare const VolumeMinusIcon: react.FC<IconProps>;

declare const VolumePlusIcon: react.FC<IconProps>;

declare const VolumeXIcon: react.FC<IconProps>;

declare const Webcam01Icon: react.FC<IconProps>;

declare const Webcam02Icon: react.FC<IconProps>;

declare const WifiOffIcon: react.FC<IconProps>;

declare const WifiIcon: react.FC<IconProps>;

declare const YoutubeIcon: react.FC<IconProps>;

declare const FaceIdSquareIcon: react.FC<IconProps>;

declare const FaceIdIcon: react.FC<IconProps>;

declare const FileLock01Icon: react.FC<IconProps>;

declare const FileLock02Icon: react.FC<IconProps>;

declare const FileLock03Icon: react.FC<IconProps>;

declare const FileShield01Icon: react.FC<IconProps>;

declare const FileShield02Icon: react.FC<IconProps>;

declare const FileShield03Icon: react.FC<IconProps>;

declare const Fingerprint01Icon: react.FC<IconProps>;

declare const Fingerprint02Icon: react.FC<IconProps>;

declare const Fingerprint03Icon: react.FC<IconProps>;

declare const Fingerprint04Icon: react.FC<IconProps>;

declare const FolderShieldIcon: react.FC<IconProps>;

declare const Key01Icon: react.FC<IconProps>;

declare const Key02Icon: react.FC<IconProps>;

declare const Lock01Icon: react.FC<IconProps>;

declare const Lock02Icon: react.FC<IconProps>;

declare const Lock03Icon: react.FC<IconProps>;

declare const Lock04Icon: react.FC<IconProps>;

declare const LockKeyholeCircleIcon: react.FC<IconProps>;

declare const LockKeyholeSquareIcon: react.FC<IconProps>;

declare const LockUnlocked01Icon: react.FC<IconProps>;

declare const LockUnlocked02Icon: react.FC<IconProps>;

declare const LockUnlocked03Icon: react.FC<IconProps>;

declare const LockUnlocked04Icon: react.FC<IconProps>;

declare const PasscodeLockIcon: react.FC<IconProps>;

declare const PasscodeIcon: react.FC<IconProps>;

declare const ScanIcon: react.FC<IconProps>;

declare const Shield01Icon: react.FC<IconProps>;

declare const Shield02Icon: react.FC<IconProps>;

declare const Shield03Icon: react.FC<IconProps>;

declare const ShieldDollarIcon: react.FC<IconProps>;

declare const ShieldOffIcon: react.FC<IconProps>;

declare const ShieldPlusIcon: react.FC<IconProps>;

declare const ShieldTickIcon: react.FC<IconProps>;

declare const ShieldZapIcon: react.FC<IconProps>;

declare const CircleIcon: react.FC<IconProps>;

declare const Cube01Icon: react.FC<IconProps>;

declare const Cube02Icon: react.FC<IconProps>;

declare const Cube03Icon: react.FC<IconProps>;

declare const Cube04Icon: react.FC<IconProps>;

declare const CubeOutlineIcon: react.FC<IconProps>;

declare const Dice1Icon: react.FC<IconProps>;

declare const Dice2Icon: react.FC<IconProps>;

declare const Dice3Icon: react.FC<IconProps>;

declare const Dice4Icon: react.FC<IconProps>;

declare const Dice5Icon: react.FC<IconProps>;

declare const Dice6Icon: react.FC<IconProps>;

declare const Hexagon01Icon: react.FC<IconProps>;

declare const Hexagon02Icon: react.FC<IconProps>;

declare const OctagonIcon: react.FC<IconProps>;

declare const PentagonIcon: react.FC<IconProps>;

declare const SquareIcon: react.FC<IconProps>;

declare const Star01Icon: react.FC<IconProps>;

declare const Star02Icon: react.FC<IconProps>;

declare const Star03Icon: react.FC<IconProps>;

declare const Star04Icon: react.FC<IconProps>;

declare const Star05Icon: react.FC<IconProps>;

declare const Star06Icon: react.FC<IconProps>;

declare const Star07Icon: react.FC<IconProps>;

declare const StarIcon: react.FC<IconProps>;

declare const TriangleIcon: react.FC<IconProps>;

declare const AlarmClockCheckIcon: react.FC<IconProps>;

declare const AlarmClockMinusIcon: react.FC<IconProps>;

declare const AlarmClockOffIcon: react.FC<IconProps>;

declare const AlarmClockPlusIcon: react.FC<IconProps>;

declare const AlarmClockIcon: react.FC<IconProps>;

declare const CalendarCheck01Icon: react.FC<IconProps>;

declare const CalendarCheck02Icon: react.FC<IconProps>;

declare const CalendarDateIcon: react.FC<IconProps>;

declare const CalendarHeart01Icon: react.FC<IconProps>;

declare const CalendarHeart02Icon: react.FC<IconProps>;

declare const CalendarMinus01Icon: react.FC<IconProps>;

declare const CalendarMinus02Icon: react.FC<IconProps>;

declare const CalendarPlus01Icon: react.FC<IconProps>;

declare const CalendarPlus02Icon: react.FC<IconProps>;

declare const CalendarIcon: react.FC<IconProps>;

declare const ClockCheckIcon: react.FC<IconProps>;

declare const ClockFastForwardIcon: react.FC<IconProps>;

declare const ClockPlusIcon: react.FC<IconProps>;

declare const ClockRefreshIcon: react.FC<IconProps>;

declare const ClockRewindIcon: react.FC<IconProps>;

declare const ClockSnoozeIcon: react.FC<IconProps>;

declare const ClockStopwatchIcon: react.FC<IconProps>;

declare const ClockIcon: react.FC<IconProps>;

declare const Hourglass01Icon: react.FC<IconProps>;

declare const Hourglass02Icon: react.FC<IconProps>;

declare const Hourglass03Icon: react.FC<IconProps>;

declare const WatchCircleIcon: react.FC<IconProps>;

declare const WatchSquareIcon: react.FC<IconProps>;

declare const FaceContentIcon: react.FC<IconProps>;

declare const FaceFrownIcon: react.FC<IconProps>;

declare const FaceHappyIcon: react.FC<IconProps>;

declare const FaceNeutralIcon: react.FC<IconProps>;

declare const FaceSadIcon: react.FC<IconProps>;

declare const FaceSmileIcon: react.FC<IconProps>;

declare const FaceWinkIcon: react.FC<IconProps>;

declare const User01Icon: react.FC<IconProps>;

declare const User02Icon: react.FC<IconProps>;

declare const User03Icon: react.FC<IconProps>;

declare const UserCheck01Icon: react.FC<IconProps>;

declare const UserCheck02Icon: react.FC<IconProps>;

declare const UserCircleIcon: react.FC<IconProps>;

declare const UserDown01Icon: react.FC<IconProps>;

declare const UserDown02Icon: react.FC<IconProps>;

declare const UserEditIcon: react.FC<IconProps>;

declare const UserLeft01Icon: react.FC<IconProps>;

declare const UserLeft02Icon: react.FC<IconProps>;

declare const UserMinus01Icon: react.FC<IconProps>;

declare const UserMinus02Icon: react.FC<IconProps>;

declare const UserPlus01Icon: react.FC<IconProps>;

declare const UserPlus02Icon: react.FC<IconProps>;

declare const UserRight01Icon: react.FC<IconProps>;

declare const UserRight02Icon: react.FC<IconProps>;

declare const UserSquareIcon: react.FC<IconProps>;

declare const UserUp01Icon: react.FC<IconProps>;

declare const UserUp02Icon: react.FC<IconProps>;

declare const UserX01Icon: react.FC<IconProps>;

declare const UserX02Icon: react.FC<IconProps>;

declare const Users01Icon: react.FC<IconProps>;

declare const Users02Icon: react.FC<IconProps>;

declare const Users03Icon: react.FC<IconProps>;

declare const UsersCheckIcon: react.FC<IconProps>;

declare const UsersDownIcon: react.FC<IconProps>;

declare const UsersEditIcon: react.FC<IconProps>;

declare const UsersLeftIcon: react.FC<IconProps>;

declare const UsersMinusIcon: react.FC<IconProps>;

declare const UsersPlusIcon: react.FC<IconProps>;

declare const UsersRightIcon: react.FC<IconProps>;

declare const UsersUpIcon: react.FC<IconProps>;

declare const UsersXIcon: react.FC<IconProps>;

declare const Cloud01Icon: react.FC<IconProps>;

declare const Cloud02Icon: react.FC<IconProps>;

declare const Cloud03Icon: react.FC<IconProps>;

declare const CloudLightningIcon: react.FC<IconProps>;

declare const CloudMoonIcon: react.FC<IconProps>;

declare const CloudOffIcon: react.FC<IconProps>;

declare const CloudRaining01Icon: react.FC<IconProps>;

declare const CloudRaining02Icon: react.FC<IconProps>;

declare const CloudRaining03Icon: react.FC<IconProps>;

declare const CloudRaining04Icon: react.FC<IconProps>;

declare const CloudRaining05Icon: react.FC<IconProps>;

declare const CloudRaining06Icon: react.FC<IconProps>;

declare const CloudSnowing01Icon: react.FC<IconProps>;

declare const CloudSnowing02Icon: react.FC<IconProps>;

declare const CloudSun01Icon: react.FC<IconProps>;

declare const CloudSun02Icon: react.FC<IconProps>;

declare const CloudSun03Icon: react.FC<IconProps>;

declare const Droplets01Icon: react.FC<IconProps>;

declare const Droplets02Icon: react.FC<IconProps>;

declare const Droplets03Icon: react.FC<IconProps>;

declare const Hurricane01Icon: react.FC<IconProps>;

declare const Hurricane02Icon: react.FC<IconProps>;

declare const Hurricane03Icon: react.FC<IconProps>;

declare const Lightning01Icon: react.FC<IconProps>;

declare const Lightning02Icon: react.FC<IconProps>;

declare const Moon01Icon: react.FC<IconProps>;

declare const Moon02Icon: react.FC<IconProps>;

declare const MoonEclipseIcon: react.FC<IconProps>;

declare const MoonStarIcon: react.FC<IconProps>;

declare const Snowflake01Icon: react.FC<IconProps>;

declare const Snowflake02Icon: react.FC<IconProps>;

declare const Stars01Icon: react.FC<IconProps>;

declare const Stars02Icon: react.FC<IconProps>;

declare const Stars03Icon: react.FC<IconProps>;

declare const SunSetting01Icon: react.FC<IconProps>;

declare const SunSetting02Icon: react.FC<IconProps>;

declare const SunSetting03Icon: react.FC<IconProps>;

declare const SunIcon: react.FC<IconProps>;

declare const SunriseIcon: react.FC<IconProps>;

declare const SunsetIcon: react.FC<IconProps>;

declare const Thermometer01Icon: react.FC<IconProps>;

declare const Thermometer02Icon: react.FC<IconProps>;

declare const Thermometer03Icon: react.FC<IconProps>;

declare const ThermometerColdIcon: react.FC<IconProps>;

declare const ThermometerWarmIcon: react.FC<IconProps>;

declare const Umbrella01Icon: react.FC<IconProps>;

declare const Umbrella02Icon: react.FC<IconProps>;

declare const Umbrella03Icon: react.FC<IconProps>;

declare const WavesIcon: react.FC<IconProps>;

declare const Wind01Icon: react.FC<IconProps>;

declare const Wind02Icon: react.FC<IconProps>;

declare const Wind03Icon: react.FC<IconProps>;

type AlertProps = Omit<ComponentProps, 'children'> & {
    title: string;
    description?: string;
    color: 'default' | 'brand' | 'gray' | 'error' | 'warning' | 'success';
    size: 'floating' | 'full-width';
    customIcon?: react__default.ReactNode;
    onClose?: react__default.MouseEventHandler;
    customContentDismiss?: string;
    isDismiss?: boolean;
    isActiveAction: boolean;
    onDismiss?: react__default.MouseEventHandler<HTMLButtonElement>;
    customContentActiveAction?: string;
    onActiveAction?: react__default.MouseEventHandler<HTMLButtonElement>;
    customControls?: react__default.ReactNode;
};

declare function Alert({ title, description, color, size, onClose, isDismiss, isActiveAction, onDismiss, onActiveAction, customContentDismiss, customContentActiveAction, customControls, className, style, }: AlertProps): react__default.JSX.Element;

type ToggleProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md';
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: React.ReactNode;
};

declare function Toggle({ size, checked, disabled, label, onChange, className, style, }: ToggleProps): react__default.JSX.Element;

type RadioProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md';
    checked: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    onChange: (checked: boolean) => void;
};

declare function Radio({ className, style, checked, disabled, size, label, onChange, }: RadioProps): react__default.JSX.Element;

type CheckBoxProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md' | 'xs';
    checked: boolean;
    disabled?: boolean;
    label?: string;
    subText?: string;
    onChange: (checked: boolean) => void;
};
declare const ChecboxIconSize: {
    xs: number;
    sm: number;
    md: number;
};

declare function CheckBox({ size, disabled, checked, label, subText, className, style, onChange, }: CheckBoxProps): react__default.JSX.Element;

type AvatarProps = Omit<ComponentProps, 'children'> & {
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'profile-sm' | 'profile-md' | 'profile-lg';
    src?: string;
    text?: string;
    placeholder?: string;
    icon?: 'company' | 'offline' | 'online' | 'verified' | React.ReactNode;
};

declare function Avatar({ size, src, text, placeholder, icon, className, style, }: AvatarProps): react__default.JSX.Element;

declare const Button: react__default.ForwardRefExoticComponent<ComponentProps & {
    type?: "primary" | "secondary-gray" | "secondary-color" | "tertiary-gray" | "tertiary-color" | "link-gray" | "link-color" | "destructive-primary" | "destructive-secondary" | "destructive-tertiary" | "destructive-link" | undefined;
    useDotLeading?: boolean | undefined;
    leftIcon?: react__default.ReactNode;
    rightIcon?: react__default.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
    disabled?: boolean | undefined;
    onClick?: react__default.MouseEventHandler<HTMLButtonElement> | undefined;
} & react__default.RefAttributes<HTMLButtonElement>>;

type ButtonProps = ComponentProps & {
    type?: 'primary' | 'secondary-gray' | 'secondary-color' | 'tertiary-gray' | 'tertiary-color' | 'link-gray' | 'link-color' | 'destructive-primary' | 'destructive-secondary' | 'destructive-tertiary' | 'destructive-link';
    useDotLeading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type TooltipProps = ComponentProps & {
    placement?: Placement$1;
    title?: string;
    description?: string;
    tooltipArrow?: boolean;
};

declare function Tooltip({ children, title, description, className, style, placement, tooltipArrow, }: TooltipProps): react__default.JSX.Element;

type EmptyStateProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md' | 'lg';
    background?: 'grid' | 'circle';
    icon: 'featured' | 'illustration' | 'file';
    typeIllustration?: 'creditCard' | 'document' | 'box' | 'cloud';
    typeIcon?: 'search' | 'upload' | 'alert';
    customTypeIcon?: react__default.ReactNode;
    color?: 'primary' | 'gray';
    customIcon?: react__default.ReactNode;
    title?: string;
    description?: string;
    footer?: react__default.ReactNode;
};

declare function EmptyState({ size, background, icon, customIcon, color, typeIllustration, typeIcon, customTypeIcon, title, description, footer, className, style, }: EmptyStateProps): react__default.JSX.Element;

type RadioGroupProps = ComponentProps & {
    options: Array<{
        value: string;
        label: React.ReactNode;
        disabled?: boolean;
    }>;
    selectedValue: string;
    onChange: (value: string) => void;
};

declare function RadioGroup({ className, style, options, selectedValue, onChange, }: RadioGroupProps): react__default.JSX.Element;

type NotificationProps = Omit<ComponentProps, 'children'> & {
    type?: 'image' | 'icon';
    iconType?: 'info' | 'success' | 'warning' | 'error';
    customIcon?: react__default.ReactNode;
    imagePath?: string;
    title?: string;
    details?: string;
    content?: react__default.ReactNode;
    close: boolean;
    onClose?: () => void;
    onDismiss?: () => void;
    onActiveAction?: () => void;
    dismissContent?: string;
    activeContent?: string;
    customControls?: react__default.ReactNode;
};

declare function Notification({ type, iconType, customIcon, imagePath, title, details, content, close, onClose, onDismiss, onActiveAction, customControls, dismissContent, activeContent, className, style, }: NotificationProps): react__default.JSX.Element;

type BadgeProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg';
    label?: string | React.ReactNode;
    color: 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'grayblue' | 'bluelight' | 'blue' | 'indigo' | 'purple' | 'pink' | 'orange';
    state?: 'color' | 'outline' | 'modern';
    shape: 'pill' | 'badge';
    prefix?: 'dot' | string | React.ReactNode;
    suffix?: 'closeX' | React.ReactNode;
};

declare function Badge({ className, style, size, label, shape, color, state, prefix, suffix, }: BadgeProps): react__default.JSX.Element;

type HelpTooltipProps = Pick<TooltipProps, 'tooltipArrow' | 'placement' | 'title' | 'description'>;

declare function HelpTooltip({ title, description, tooltipArrow, placement }: HelpTooltipProps): react__default.JSX.Element;

type BaseTextFieldProps = Omit<ComponentProps, 'children'> & {
    type?: 'text' | 'tel' | 'email' | 'number' | 'password' | 'url' | 'color';
    separatedPrefix?: JSX.Element | string;
    prefix?: JSX.Element | string;
    prefixClassName?: string;
    suffix?: JSX.Element | string;
    separatedSuffix?: JSX.Element | string;
    suffixClassName?: string;
    inputClassName?: string;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    error?: boolean;
    size?: 'sm' | 'md';
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (val: string | string[]) => void;
    helpTooltip?: HelpTooltipProps;
};

type TextFieldProps = BaseTextFieldProps & {
    label?: string;
    hintText?: string;
    noSuffix?: boolean;
    noPrefix?: boolean;
    errorText?: string;
};

declare function TextField({ label, hintText, suffix, noSuffix, size, prefix, noPrefix, suffixClassName, prefixClassName, errorText, ...props }: TextFieldProps): react__default.JSX.Element;

declare function EmailTextField({ hintText, noSuffix, noPrefix, errorText, ...props }: TextFieldProps): react__default.JSX.Element;

type LocaleTel = {
    locale: string;
    code: string;
};
type TelTextFieldProps = TextFieldProps & {
    locale?: LocaleTel;
    localeData?: LocaleTel[];
};
type TelPrefixProps = {
    locale: LocaleTel;
    localeData: LocaleTel[];
};

declare function TelTextField({ hintText, noSuffix, noPrefix, localeData, locale, errorText, ...props }: TelTextFieldProps): react__default.JSX.Element;

type WebsiteTextFieldProps = TextFieldProps & {
    urlPrefix?: string;
    copySuffix?: boolean;
};

declare function WebsiteTextField({ hintText, noSuffix, noPrefix, errorText, urlPrefix, copySuffix, onChange, ...props }: WebsiteTextFieldProps): react__default.JSX.Element;

type MiscIconProps = Omit<ComponentProps, 'children'> & {
    width?: number;
    height?: number;
    color?: string;
    clickable?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
};

declare const MastercardMiscIcon: react.FC<MiscIconProps>;

declare const CompanyMiscIcon: react.FC<StatusMiscIconProps>;

declare const OfflineMiscIcon: react.FC<StatusMiscIconProps>;

declare const OnlineMiscIcon: react.FC<StatusMiscIconProps>;

declare const VerifiedTickMiscIcon: react.FC<StatusMiscIconProps>;

type StatusMiscIconProps = Omit<ComponentProps, 'children'> & {
    width?: number;
    height?: number;
    color?: string;
    clickable?: boolean;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'display-sm' | 'display-md' | 'display-lg';
    onClick?: () => void;
};

declare const StatusMiscIconWrapper: (IconSvg: any) => react__default.FC<StatusMiscIconProps>;

type TagProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg';
    label: string;
    icon?: 'dot' | 'string' | react__default.ReactNode;
    checkbox?: react__default.ReactNode;
    action?: 'closeX' | number;
    onClickCloseX?: () => void;
};

declare function Tag({ className, style, size, label, action, icon, checkbox, onClickCloseX, }: TagProps): react__default.JSX.Element;

type TagCountProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg';
    number: number;
};

declare function TagCount({ className, style, size, number }: TagCountProps): react__default.JSX.Element;

type MenuItem = {
    disabled?: boolean;
    label: string;
    icon?: React.ReactNode;
    suffixText?: string;
    onClickMenuItem?: () => void;
};
type MenuGroup = Array<MenuItem>;
type DropdownProps = Omit<ComponentProps, 'children'> & {
    menuWidth: string;
    triggerLabel: string;
    menu: Array<MenuGroup>;
    menuHeader: React.ReactNode;
    onClickMenuItem: (option: MenuItem) => void;
    disabled?: boolean;
    customTriggerComponent?: React.FC<{
        open?: boolean;
        disabled: boolean;
        onClickTrigger: () => void;
    }>;
};

declare function Dropdown({ menuWidth, triggerLabel, menu, menuHeader, onClickMenuItem, disabled, customTriggerComponent, className, style, }: DropdownProps): react__default.JSX.Element;

type Placement = 'top' | 'bottom' | 'center';
type ModalProps = ComponentProps & {
    /**If true, the component is shown. */
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    placement?: Placement;
    headerAlign?: 'left' | 'center' | 'horizontal-left';
    headerIcon?: React.ReactNode;
    headerTitle: string;
    headerSubtitle?: string;
    controlType?: 'horizontal' | 'vertical';
    controlDanger?: boolean;
    primaryButtonLabel?: string;
    primaryButtonIcon?: React.ReactNode;
    onClickPrimaryButton?: () => void;
    secondaryButtonLabel?: string;
    secondaryButtonIcon?: React.ReactNode;
    onClickSecondaryButton?: () => void;
    checkbox?: React.ReactNode;
    additionalButton?: React.ReactNode;
    /**
        If true, the modal will not automatically shift focus to itself when it opens,
            and replace it to the last focused element when it closes.
        This also works correctly with any modal children that have the disableAutoFocus prop.
    */
    disableAutoFocus?: boolean;
    /** If true, hitting escape will not fire the onClose callback. */
    disableEscapeKeyDown?: boolean;
    /** If true, the backdrop is not rendered.*/
    hideBackdrop?: boolean;
    /** Disable the scroll lock behavior. */
    disableScrollLock?: boolean;
    /** Hide close icon */
    hideCloseIcon?: boolean;
};

declare function Modal({ placement, headerAlign, headerIcon, headerTitle, headerSubtitle, children, controlType, controlDanger, primaryButtonLabel, primaryButtonIcon, onClickPrimaryButton, secondaryButtonLabel, secondaryButtonIcon, onClickSecondaryButton, checkbox, additionalButton, openModal, setOpenModal, hideCloseIcon, className, style, disableAutoFocus, disableEscapeKeyDown, hideBackdrop, }: ModalProps): false | react__default.JSX.Element;

type ButtonGroupItemProps = {
    label?: string;
    useDot?: boolean;
    icon?: react__default.ReactNode;
    onClick?: react__default.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

type ButtonGroupProps = Omit<ComponentProps, 'children'> & {
    buttons: ButtonGroupItemProps[];
};

declare function ButtonGroup({ buttons, style, className }: ButtonGroupProps): react__default.JSX.Element;

type BreadCrumbsProps = ComponentProps & {
    routes: Array<{
        path: string;
        identifier: string;
        name: string;
        to: string | Location;
    }>;
    divider: 'chevron' | 'slash';
    type: 'text' | 'textWithLine' | 'buttonBrand' | 'buttonGray';
    onClick: (route: Route, index: number) => void;
};
type Route = {
    identifier: string;
    path: string;
};
type Location = {
    pathname: string;
};

declare function BreadCrumbs({ routes, divider, type, className, style, onClick, }: BreadCrumbsProps): react__default.JSX.Element;

type SliderRange = {
    min: number;
    max: number;
};
type SliderProps = Omit<ComponentProps, 'children'> & {
    displayLabelType: 'none' | 'top-floating' | 'bottom-floating' | 'top-default' | 'bottom-default';
    customLabelRender: (value: number, thumb?: 'left' | 'right') => React.ReactNode;
    type?: 'percent';
    range: SliderRange;
    limitRange: SliderRange;
    onChange: (range: SliderRange) => void;
    step?: number;
};

declare function Slider({ displayLabelType, type, limitRange, range, onChange, step, customLabelRender, className, style, }: SliderProps): react__default.JSX.Element;

type ProgressBarProps = Omit<ComponentProps, 'children'> & {
    positionLabel?: 'false' | 'right' | 'bottom' | 'top-floating' | 'bottom-floating';
    width: 'full' | number;
    progress: number;
};

declare function ProgressBar({ className, style, positionLabel, progress, width, }: ProgressBarProps): react__default.JSX.Element;

type BaseTextareaFieldProps = Omit<ComponentProps, 'children'> & {
    placeholder?: string;
    noResize?: boolean;
    error?: boolean;
    value?: string;
    rows?: number;
    disabled?: boolean;
    onChange?: (val: string) => void;
};

type TextareaFieldProps = BaseTextareaFieldProps & {
    label?: string;
    errorText?: string;
    hintText?: string;
};

declare function TextareaField({ className, label, errorText, hintText, ...props }: TextareaFieldProps): react__default.JSX.Element;

type LoadingIndicatorProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    type?: 'line-simple' | 'line-spinner' | 'dot-circle';
    haveLabel?: boolean;
};

declare function LoadingIndicators({ size, type, haveLabel, }: LoadingIndicatorProps): react__default.JSX.Element;

type ProgressCircleProps = Omit<ComponentProps, 'children'> & {
    progress: number;
    label?: string;
    shape?: 'circle' | 'half-circle';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
};

declare function ProgressCircle({ className, style, size, progress, label, shape, }: ProgressCircleProps): react__default.JSX.Element;

type ContentDividerProps = ComponentProps & {
    dividerStyle: 'single-line' | 'dual-line' | 'background-fill';
};

declare function ContentDivider({ children, className, style, dividerStyle, }: ContentDividerProps): react__default.JSX.Element;

type ButtonBaseProps = {
    key?: number | string;
    label?: string | number;
    onClick?: () => void;
};
type PaginationProps = Omit<ComponentProps, 'children'> & {
    allocate: 'page' | 'card';
    type: 'default' | 'minimal' | 'button-group';
    align?: 'left' | 'center' | 'right';
    page?: number;
    shape?: 'circle' | 'square';
    onChangePage: (page: number) => void;
    totalPage: number;
};

declare function Pagination({ className, style, allocate, type, page, onChangePage, totalPage, shape, align, }: PaginationProps): react__default.JSX.Element;

type DatePickerCommonProps = Omit<ComponentProps, 'children'> & {
    panel?: boolean;
    label?: string;
    overlay?: boolean;
    disabled?: boolean;
    disabledDate?: {
        from?: Dayjs;
        to?: Dayjs;
    }[];
    customDays?: string[];
    customMonths?: string[];
};

type RangePickerProps = DatePickerCommonProps & {
    value: Array<Dayjs>;
    onChange: (value: Array<Dayjs>) => void;
};

declare function RangePicker({ panel, label, value, onChange, overlay, customDays, customMonths, disabled, disabledDate, className, style, }: RangePickerProps): react__default.JSX.Element;

type DatePickerProps = DatePickerCommonProps & {
    value: Dayjs;
    onChange: (value: Dayjs) => void;
};

declare function DatePicker({ panel, label, value, onChange, overlay, customDays, customMonths, disabled, disabledDate, className, style, }: DatePickerProps): react__default.JSX.Element;

type ProgressStepItemType = {
    icon?: React.ReactElement<IconProps>;
    title: string;
    description?: string;
};
type ProgressStepsProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md' | 'lg';
    type: 'icon' | 'featured-icon';
    currentStep: number;
    mode?: 'horizontal' | 'vertical';
    connectionLineViewVertical?: boolean;
    stepItems: ProgressStepItemType[];
};

type ProgressStepItemProps = Omit<ComponentProps, 'children'> & ProgressStepItemType & {
    size?: 'sm' | 'md' | 'lg';
    type?: 'icon' | 'featured-icon';
    connectionLineViewVertical?: boolean;
    mode?: 'horizontal' | 'vertical';
    status: 'current' | 'completed' | 'pending';
};

declare function ProgressStepItem({ className, style, size, type, mode, connectionLineViewVertical, icon, title, description, status, }: ProgressStepItemProps): react__default.JSX.Element;

declare function ProgressSteps({ className, style, size, type, connectionLineViewVertical, mode, currentStep, stepItems, }: ProgressStepsProps): react__default.JSX.Element;

/**
 * @prop `value` - value of an `Option`
 * @prop `label` - label which will displayed
 * @prop `disabled` - make this option disabled to select.
 * @prop `customLabel` - custom label
 */
type InputDropdownOption = {
    value: string;
    label: {
        prefix?: React.ReactNode;
        label: string;
        suffix?: React.ReactNode;
    };
    disabled?: boolean;
    customLabel?: {
        [key: string]: any;
    };
};
type InputDropdownProps = Omit<ComponentProps, 'children'> & {
    /**
     * `Options` of `Input-Dropdown`
     */
    options: Array<InputDropdownOption>;
    /**
     * `single` or `multiple` choice
     */
    multi?: boolean;
    /**
     * Make `Input-Dropdown` `disabled` to select
     */
    disabled?: boolean;
    /**
     * `Placeholder` of `Input-Dropdown`
     */
    placeholder?: string;
    /**
     * Custom `Left Icon`
     */
    leftIcon?: React.ReactNode;
    /**
     * Make `Input-Dropdown` `searchable`
     */
    searchable?: boolean;
    /**
     * `Clear` selected options
     */
    removable?: boolean;
    /**
     * Custom `Options` of `Input-Dropdown`
     *
     * This function will `fetch the API` and return a `Promise`
     *
     * @param opts - Filtered by `{searchText?: string}`
     * @returns `Promise<Array<InputDropdownOption>>`
     */
    optionsResolver?: (opts: {
        searchText?: string;
    }) => Promise<Array<InputDropdownOption>>;
    /**
     * Corresponds to `optionsResolver`,
     * this function will `fetch the API` and return a `Promise` of `selected values`
     * @param value - An `array` of `selected value`
     * @returns `Promise<Array<InputDropdownOption>>`
     */
    selectedOptionsResolver?: (value: string[]) => Promise<Array<InputDropdownOption>>;
    /**
     * Custom `Search Function` on an `option`
     *
     * @param option
     * @param searchText
     * @returns
     */
    searchResolver?: (option: InputDropdownOption, searchText: string) => boolean;
    /**
     * Custom `options` render
     *
     * @param option - Selected value
     * @param selected - A `boolean` tell whether this `option` is `selected` or not.
     * @returns
     */
    optionRender?: React.FC<{
        option: InputDropdownOption;
        selected: boolean;
    }>;
    /**
     * Custom `selected options` render
     *
     * @param value - Selected value
     * @param option - Selected option
     * @param onRemoveOption - `onRemoveOption` func will `remove` a `selected value`
     * @returns
     */
    selectedOptionRender?: React.FC<{
        value: string;
        option: InputDropdownOption;
        onRemoveOption: (value: string, option: InputDropdownOption) => void;
    }>;
    /**
     * Current selected option
     */
    value: string | string[];
    /**
     * Called when select an option or input value change
     *
     * @param value
     * @returns
     */
    onChange: (value: string | string[]) => void;
};

declare function InputDropdown({ removable, multi, disabled, leftIcon, placeholder, searchable, options, optionsResolver, selectedOptionsResolver, searchResolver, optionRender, selectedOptionRender, value, onChange, className, style, }: InputDropdownProps): react__default.JSX.Element;

type DatasetsBarChart = {
    label: string;
    data: number[];
    color: string;
};
type BarChartProps = Omit<ComponentProps, 'children'> & {
    datasets: DatasetsBarChart[];
    minValue?: number;
    maxValue?: number;
    stepSize?: number;
    xAxisLabels: '30days' | '12months' | '7days' | string[];
    yAxisValuesShow?: boolean;
    legendShow: 'none' | 'top' | 'right';
    height?: string | number;
    mainAxisLabel?: {
        xLabel: string;
        yLabel: string;
    };
};

declare function BarChart({ datasets, xAxisLabels, yAxisValuesShow, mainAxisLabel, height, legendShow, minValue, maxValue, stepSize, className, style, }: BarChartProps): react__default.JSX.Element;

type DatasetsLineChart = {
    label: string;
    data: number[];
    color: string;
};
type LineChartProps = Omit<ComponentProps, 'children'> & {
    datasets: DatasetsLineChart[];
    minValue?: number;
    maxValue?: number;
    stepSize?: number;
    xAxisLabels: '30days' | '12months' | '7days' | string[];
    yAxisValuesShow?: boolean;
    legendShow: 'none' | 'top' | 'right';
    height?: string | number;
    mainAxisLabel?: {
        xLabel: string;
        yLabel: string;
    };
    lineType?: 'gradual' | 'wavy' | 'volatile';
};

declare function LineChart({ datasets, xAxisLabels, yAxisValuesShow, mainAxisLabel, height, legendShow, minValue, maxValue, stepSize, lineType, className, style, }: LineChartProps): react__default.JSX.Element;

type DatasetsPieChart = {
    label: string;
    data: number;
    color: string;
};
type PieChartProps = Omit<ComponentProps, 'children'> & {
    datasets: DatasetsPieChart[];
    legendShow: boolean;
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    hole: '0%' | '25%' | '50%' | '75%';
};

declare function PieChart({ datasets, legendShow, size, hole, className, style }: PieChartProps): react__default.JSX.Element;

type DatasetsActivityGauge = {
    label: string;
    data: number;
    color: string;
};
type ActivityGaugeProps = Omit<ComponentProps, 'children'> & {
    label?: string;
    totalValue: number;
    datasets: DatasetsActivityGauge[];
    legendShow: 'none' | 'bottom' | 'right';
    size: 'xs' | 'sm' | 'md' | 'lg';
};

declare function ActivityGauge({ label, totalValue, datasets, size, legendShow, className, style, }: ActivityGaugeProps): react__default.JSX.Element;

type ExtendedScale = Scale<CoreScaleOptions> & {
    _pointLabelItems: {
        y: number;
    }[];
};
type DatasetsRadarChart = {
    label: string;
    data: number[];
    color: string;
};
type RadarChartProps = Omit<ComponentProps, 'children'> & {
    datasets: DatasetsRadarChart[];
    labels: string[];
    minValue?: number;
    maxValue?: number;
    stepSize?: number;
    legendShow: 'none' | 'bottom' | 'right';
    height?: string | number;
    width?: string | number;
};

declare function RadarChart({ datasets, labels, legendShow, height, width, minValue, maxValue, stepSize, className, style, }: RadarChartProps): react__default.JSX.Element;

type TabButtonType = {
    label: string;
    index: string;
    notiCount?: number;
};
type TabsProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md';
    direction?: 'horizontal' | 'vertical';
    type?: 'primary' | 'gray' | 'white' | 'underline' | 'underline-filled' | 'line';
    fullWidth?: boolean;
    listTab: TabButtonType[];
    currentTabKey: string;
    onChangeTabKey: (currentTabKey: string) => void;
};

declare function Tabs({ className, style, size, listTab, direction, type, fullWidth, currentTabKey, onChangeTabKey, }: TabsProps): react__default.JSX.Element;

type SlideoutProps = Omit<ComponentProps, 'children'> & {
    side?: 'left' | 'right';
    headerIcon?: React.ReactNode;
    openSlideout: boolean;
    setOpenSlideout: (openSlideout: boolean) => void;
    headerTitle: string;
    headerSubtitle?: string;
    headerContent?: React.ReactNode;
    content: React.ReactNode;
    footerContent?: React.ReactNode;
    closeOnOutsideClick?: boolean;
};

declare function Slideout({ side, openSlideout, setOpenSlideout, headerIcon, headerTitle, headerSubtitle, headerContent, content, footerContent, closeOnOutsideClick, className, style, }: SlideoutProps): false | react__default.JSX.Element;

type TableCellProps = ComponentProps & {
    leading?: boolean;
    avatar?: React.ReactElement<AvatarProps>;
    avatarGroupSrc?: string[];
    checkbox?: React.ReactElement<CheckBoxProps>;
    radio?: React.ReactElement<RadioProps>;
    trend?: string;
    toggle?: React.ReactElement<ToggleProps>;
    positive?: number;
    negative?: number;
    progress?: number;
    badge?: React.ReactElement<BadgeProps>;
    badges?: React.ReactElement<BadgeProps>[];
    paymentMethod?: React.ReactElement<MiscIconProps>;
    icon?: React.ReactElement<IconProps>;
    actionButtons?: ActioButtonsType[];
    actionIcons?: React.ReactElement<IconProps>[];
    actionDropdownIconOptions?: DropdownMenuType;
    starRating?: number;
    text?: string;
    subText?: string;
};
type DropdownMenuType = {
    menuWidth?: string;
    menu: Array<MenuGroup>;
    menuHeader: React.ReactNode;
    onClickMenuItem: (option: MenuItem) => void;
};
type ActioButtonsType = {
    label: string;
    onClick: () => void;
    type: 'link-gray' | 'link-color';
};

declare function TableCell({ leading, text, subText, ...props }: TableCellProps): react__default.JSX.Element;

type TableHeaderProps = ComponentProps & {
    color?: 'white' | 'gray';
};

declare function TableHeader({ ...props }: TableHeaderProps): react__default.JSX.Element;

type TableHeaderCellProps = Omit<ComponentProps, 'children'> & {
    primary?: boolean;
    label?: string;
    disabled?: boolean;
    checkbox?: CheckBoxProps;
    iconActions?: React.ReactElement<IconProps>[];
    sorting?: () => SortingType;
    helpTooltip?: HelpingProps;
};
type HelpingProps = {
    title: string;
    description?: string;
};
type SortingType = 'asc' | 'desc';

declare function TableHeaderCell({ disabled, label, checkbox, primary, helpTooltip, sorting, ...props }: TableHeaderCellProps): react__default.JSX.Element;

type TableProps<RecordType = any> = Omit<ComponentProps, 'children'> & {
    cardHeader?: react__default.ReactNode;
    cardHeaderActions?: react__default.ReactNode;
    cardHeaderLabel?: react__default.ReactNode;
    cardHeaderSubText?: string;
    noCardHeader?: boolean;
    cardHeaderDropdownOptions?: DropdownMenuType;
    pagination?: TablePaginationProps;
    useAlternativeFillDevider?: boolean;
    dataSource: DataSourceType<RecordType>['data'];
    columns: ColumnsType<RecordType>;
    rowSelection?: TableRowSelection<RecordType>;
};
type TableLayout = 'auto' | 'fixed';
type TablePaginationProps = {
    total: number;
    onChangePage: (page: number) => void;
    limit: number;
    page: number;
};
interface ColumnHeaderType {
    title: string;
    key?: react__default.Key;
    className?: string;
    disabled?: boolean;
    primary?: boolean;
    sorting?: () => SortingType;
    helpTooltip?: HelpingProps;
    checkbox?: CheckBoxProps;
    hidden?: boolean;
}
type ColumnsType<RecordType = unknown> = readonly ColumnType<RecordType>[];
interface ColumnType<RecordType> extends ColumnHeaderType {
    dataIndex: string;
    render?: (record: RecordType, index: number) => react__default.ReactNode;
}
interface DataSourceType<RecordType = unknown> {
    data?: readonly RecordType[];
    emptyText?: react__default.ReactNode | (() => react__default.ReactNode);
}
interface TableRowSelection<T> {
    type?: RowSelectionType;
    onChange?: (selectedRowKeys: react__default.Key[], selectedRows: T[]) => void;
    onSelect?: SelectionSelectFn<T>;
}
type RowSelectionType = 'checkbox' | 'radio';
type SelectionSelectFn<T> = (record: T, selected: boolean) => void;

declare function Table<RecordType extends object>({ noCardHeader, dataSource, rowSelection, columns, ...props }: TableProps<RecordType>): react__default.JSX.Element;
type RowSelectionRender = {
    value: boolean;
    type: RowSelectionType;
    onChange: (val: boolean) => void;
};

type TableRowProps = ComponentProps;

declare function TableRow({ ...props }: TableRowProps): react__default.JSX.Element;

type ErrorDetails = {
    phase: 'initialization' | 'runtime';
    willEditorRestart?: boolean;
};
type RichEditorProps = Omit<ComponentProps, 'children'> & {
    id?: number | string;
    ref?: React.LegacyRef<CKEditor<Editor>>;
    config?: EditorConfig;
    data?: string;
    disabled?: boolean;
    watchdogConfig?: WatchdogConfig;
    disableWatchdog?: boolean;
    /**
     * @description
     * The function that will be used to create an upload adapter for the editor.
     * If not provided, the editor will not support uploading file from local.
     */
    uploadAdapter?: (loader: FileLoader) => UploadAdapter;
    onReady?: (editor: Editor) => void;
    onChange?: (event: EventInfo, editor: Editor) => void;
    onBlur?: (event: EventInfo, editor: Editor) => void;
    onFocus?: (event: EventInfo, editor: Editor) => void;
    onError?: (error: Error, details: ErrorDetails) => void;
};

declare function RichEditor({ id, ref, data, config, disabled, watchdogConfig, disableWatchdog, uploadAdapter, onReady, onChange, onBlur, onFocus, onError, className, style, }: RichEditorProps): react__default.JSX.Element;

type ProgressStepsMinimalIconsProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg';
    useStepTextIndicator?: boolean;
    totalSteps: number;
    currentStep?: number;
};

declare function ProgressStepsMinimalIcons({ size, useStepTextIndicator, totalSteps, currentStep, className, style, }: ProgressStepsMinimalIconsProps): react__default.JSX.Element;

type SidebarNavigationBaseItem = {
    id: string;
    dot?: boolean;
    prefix?: react__default.ReactNode;
    suffix?: react__default.ReactNode;
    label?: string;
    notifs?: number;
    disabled?: boolean;
    onClick?: () => void;
    path?: string;
    metadata?: {
        [key: string]: unknown;
    };
};
type SidebarNavigationItem = Omit<SidebarNavigationBaseItem, 'dot' | 'suffix' | 'notifs'> & {
    items: SidebarNavigationBaseItem[];
};
type SidebarNavType = 'simple' | 'dual-tier' | 'slim';
type SidebarNavigationProps = Omit<ComponentProps, 'children'> & {
    open: boolean;
    setOpen: (open: boolean) => void;
    type: SidebarNavType;
    headerContent: react__default.ReactNode;
    headerSlim?: react__default.ReactNode;
    search?: react__default.ReactNode;
    contentItems: SidebarNavigationItem[];
    footerContentItems?: SidebarNavigationBaseItem[];
    footerPrefix: react__default.ReactNode;
    footerContent: react__default.ReactNode;
    footerSuffix?: react__default.ReactNode;
    closeOnOutsideClick?: boolean;
    onClickNavigationItem?: (item: SidebarNavigationBaseItem) => void;
};

declare function SidebarNavigation({ open, setOpen, type, headerContent, headerSlim, search, contentItems, footerContentItems, footerPrefix, footerContent, footerSuffix, onClickNavigationItem, closeOnOutsideClick, className, style, }: SidebarNavigationProps): false | react__default.JSX.Element;

type ProgressStepsMinimalIconsConnectedProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg';
    totalSteps: number;
    currentStep?: number;
};

declare function ProgressStepsMinimalIconsConnected({ size, totalSteps, currentStep, className, style, }: ProgressStepsMinimalIconsConnectedProps): react__default.JSX.Element;

type ProgressStepSLineItemType = {
    title: string;
    description?: string;
};
type ProgressStepsLineProps = Omit<ComponentProps, 'children'> & {
    size?: 'sm' | 'md' | 'lg';
    currentStep?: number;
    stepItem: ProgressStepSLineItemType[];
};

declare function ProgressStepsLine({ stepItem, currentStep, size, className, style, }: ProgressStepsLineProps): react__default.JSX.Element;

type AvatarProfilePhotoProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md' | 'lg';
    avatarSrc?: string;
    avatarText?: string;
    avatarPlaceholder?: string;
    avatarStatusIcon?: 'company' | 'offline' | 'online' | 'verified' | React.ReactNode;
};

declare function AvatarProfilePhoto({ size, avatarSrc, avatarText, avatarPlaceholder, avatarStatusIcon, className, style, }: AvatarProfilePhotoProps): react__default.JSX.Element;

type PageHeaderType = 'simple' | 'banner';
type PageHeaderAlign = 'left' | 'center';
type PageHeaderProps = Omit<ComponentProps, 'children'> & {
    type: PageHeaderType;
    align?: PageHeaderAlign;
    avatarSrc?: string;
    avatarIcon?: React.ReactNode;
    bannerSrc?: string;
    breadcrumbs?: React.ReactNode;
    title: string;
    subtitle?: string;
    actions: React.ReactNode[];
    search: React.ReactNode;
    onNavigateBack: () => void;
};

declare function PageHeader({ type, align, avatarSrc, avatarIcon, bannerSrc, breadcrumbs, title, subtitle, actions, search, onNavigateBack, className, style, }: PageHeaderProps): react__default.JSX.Element;

type BadgeGroupProps = Omit<ComponentProps, 'children'> & {
    type: 'leading' | 'trailing';
    color: 'gray' | 'brand' | 'error' | 'warning' | 'success';
    theme: 'light' | 'outline' | 'modern';
    size?: 'md' | 'lg';
    text: string;
    subText: string;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

declare function BadgeGroup({ className, style, type, color, theme, size, text, icon, subText, onClick, }: BadgeGroupProps): react__default.JSX.Element;

type MetricType = 'simple' | 'icon-trend' | 'icon-zap' | 'icon-trend-gray' | 'chart-realistic' | 'chart-layers' | 'chart-wavy';
type MetricProps = Omit<ComponentProps, 'children'> & {
    type: MetricType;
    trendType: 'positive' | 'negative';
    trendIconType: 'trend' | 'arrow';
    chart: react__default.ReactNode;
    metricIcon?: react__default.ReactNode;
    metricTitle?: string;
    percentChange?: number;
    percentChangeSupportText?: string;
    figure: string | number;
    options?: react__default.ReactNode;
    action?: react__default.ReactNode;
    customAction?: react__default.ReactNode;
};

declare function Metric({ type, trendType, trendIconType, metricIcon, metricTitle, figure, percentChange, percentChangeSupportText, chart, options, action, className, style, }: MetricProps): react__default.JSX.Element;

type AvatarLabelGroupProps = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md' | 'lg' | 'xl';
    text: string;
    subText: string;
    avatarSrc?: string;
    avatarPlaceholder?: string;
    avatarStatusIcon?: 'company' | 'offline' | 'online' | 'verified' | React.ReactNode;
};

declare function AvatarLabelGroup({ size, text, subText, avatarSrc, avatarPlaceholder, avatarStatusIcon, className, style, }: AvatarLabelGroupProps): react__default.JSX.Element;

/**
 * Must define @type
 * @type = 'card' must have label & featuredIcon
 */
type CheckBoxGroupProps<CheckBoxDataModel = any> = Omit<ComponentProps, 'children'> & {
    size: 'sm' | 'md';
    onChange?: (selectedRowKeys: React.Key[], selectedRows: CheckBoxDataModel[]) => void;
    layout: 'button' | 'simple' | 'card';
    render?: (record: CheckBoxDataModel, index: number) => React.ReactNode;
    option: readonly CheckBoxGroupOption<CheckBoxDataModel>[];
    initialValue: React.Key[];
};
interface CheckBoxGroupOption<CheckBoxDataModel> {
    data: CheckBoxDataModel;
    value: React.Key;
    disabled?: boolean;
    featuredIcon?: React.ReactElement<IconProps>;
    customeFeaturedIcon?: React.ReactNode;
    label?: string;
}

declare function CheckBoxGroup<CheckBoxDataModel extends object>({ className, style, option, render, initialValue, ...props }: CheckBoxGroupProps): react__default.JSX.Element;

type AvatarGroupItemType = {
    avatarSrc?: string;
    avatarText?: string;
    avatarPlaceholder?: string;
};
type AvatarGroupProps = Omit<ComponentProps, 'children'> & {
    size?: 'xs' | 'sm' | 'md';
    maxAvatarVisible?: number;
    avatars: AvatarGroupItemType[];
    addAvatarBtnDisabled?: boolean;
    handleAddAvatarBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
};

declare function AvatarGroup({ size, maxAvatarVisible, avatars, addAvatarBtnDisabled, handleAddAvatarBtnClick, className, style, }: AvatarGroupProps): react__default.JSX.Element;

type NotificationWrapperProps = NotificationProps & {
    key?: string;
    duration?: number;
    placement?: NotifPlacementType;
};

type Config = {
    bottom?: number;
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    stack?: {
        threshold: number;
    };
    top?: number;
    maxCount?: number;
};
type NotificationProviderProps = {
    children: React.ReactNode;
    notifConfig?: Config;
};
type NotifPlacementType = 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
type NotifOpts = Omit<NotificationWrapperProps, 'placement'>;

declare const NotificationContext: react__default.Context<{
    config: (opts: Config) => void;
    open: (notifProps: NotifOpts) => void;
}>;
declare function NotificationProvider({ children, notifConfig }: NotificationProviderProps): react__default.JSX.Element;

declare const useNotification: () => {
    config: (opts: Config) => void;
    open: (notifProps: NotifOpts) => void;
};

export { type ActioButtonsType, ActivityGauge, type ActivityGaugeProps, ActivityHeartIcon, ActivityIcon, AirplayIcon, AirpodsIcon, AlarmClockCheckIcon, AlarmClockIcon, AlarmClockMinusIcon, AlarmClockOffIcon, AlarmClockPlusIcon, Alert, AlertCircleIcon, AlertHexagonIcon, AlertOctagonIcon, type AlertProps, AlertSquareIcon, AlertTriangleIcon, AlignBottom01Icon, AlignBottom02Icon, AlignCenterIcon, AlignHorizontalCentre01Icon, AlignHorizontalCentre02Icon, AlignJustifyIcon, AlignLeft01Icon, AlignLeft02Icon, AlignLeftIcon, AlignRight01Icon, AlignRight02Icon, AlignRightIcon, AlignTop01Icon, AlignTop02Icon, AlignVerticalCenter01Icon, AlignVerticalCenter02Icon, AnchorIcon, AnnotationAlertIcon, AnnotationCheckIcon, AnnotationDotsIcon, AnnotationHeartIcon, AnnotationIcon, AnnotationInfoIcon, AnnotationPlusIcon, AnnotationQuestionIcon, AnnotationXIcon, Announcement01Icon, Announcement02Icon, Announcement03Icon, ArchiveIcon, ArrowBlockDownIcon, ArrowBlockLeftIcon, ArrowBlockRightIcon, ArrowBlockUpIcon, ArrowCircleBrokenDownIcon, ArrowCircleBrokenDownLeftIcon, ArrowCircleBrokenDownRightIcon, ArrowCircleBrokenLeftIcon, ArrowCircleBrokenRightIcon, ArrowCircleBrokenUpIcon, ArrowCircleBrokenUpLeftIcon, ArrowCircleBrokenUpRightIcon, ArrowCircleDownIcon, ArrowCircleDownLeftIcon, ArrowCircleDownRightIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowCircleUpIcon, ArrowCircleUpLeftIcon, ArrowCircleUpRightIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowLeftIcon, ArrowNarrowDownIcon, ArrowNarrowDownLeftIcon, ArrowNarrowDownRightIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ArrowNarrowUpIcon, ArrowNarrowUpLeftIcon, ArrowNarrowUpRightIcon, ArrowRightIcon, ArrowSquareDownIcon, ArrowSquareDownLeftIcon, ArrowSquareDownRightIcon, ArrowSquareLeftIcon, ArrowSquareRightIcon, ArrowSquareUpIcon, ArrowSquareUpLeftIcon, ArrowSquareUpRightIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpRightIcon, ArrowsDownIcon, ArrowsLeftIcon, ArrowsRightIcon, ArrowsTriangleIcon, ArrowsUpIcon, Asterisk01Icon, Asterisk02Icon, AtSignIcon, Atom01Icon, Atom02Icon, Attachment01Icon, Attachment02Icon, Avatar, AvatarGroup, type AvatarGroupItemType, type AvatarGroupProps, AvatarLabelGroup, type AvatarLabelGroupProps, AvatarProfilePhoto, type AvatarProfilePhotoProps, type AvatarProps, Award01Icon, Award02Icon, Award03Icon, Award04Icon, Award05Icon, BackpackIcon, Badge, BadgeGroup, type BadgeGroupProps, type BadgeProps, BankIcon, BankNote01Icon, BankNote02Icon, BankNote03Icon, BarChart, BarChart01Icon, BarChart02Icon, BarChart03Icon, BarChart04Icon, BarChart05Icon, BarChart06Icon, BarChart07Icon, BarChart08Icon, BarChart09Icon, BarChart10Icon, BarChart11Icon, BarChart12Icon, BarChartCircle01Icon, BarChartCircle02Icon, BarChartCircle03Icon, type BarChartProps, BarChartSquare01Icon, BarChartSquare02Icon, BarChartSquare03Icon, BarChartSquareDownIcon, BarChartSquareMinusIcon, BarChartSquarePlusIcon, BarChartSquareUpIcon, BarLineChartIcon, BatteryCharging01Icon, BatteryCharging02Icon, BatteryEmptyIcon, BatteryFullIcon, BatteryLowIcon, BatteryMidIcon, Beaker01Icon, Beaker02Icon, Bell01Icon, Bell02Icon, Bell03Icon, Bell04Icon, BellMinusIcon, BellOff01Icon, BellOff02Icon, BellOff03Icon, BellPlusIcon, BellRinging01Icon, BellRinging02Icon, BellRinging03Icon, BellRinging04Icon, BezierCurve01Icon, BezierCurve02Icon, BezierCurve03Icon, BluetoothConnectIcon, BluetoothOffIcon, BluetoothOnIcon, BluetoothSignalIcon, Bold01Icon, Bold02Icon, BoldSquareIcon, BookClosedIcon, BookOpen01Icon, BookOpen02Icon, BookmarkAddIcon, BookmarkCheckIcon, BookmarkIcon, BookmarkMinusIcon, BookmarkXIcon, BoxIcon, BracketsCheckIcon, BracketsEllipsesIcon, BracketsIcon, BracketsMinusIcon, BracketsPlusIcon, BracketsSlashIcon, BracketsXIcon, BreadCrumbs, type BreadCrumbsProps, Briefcase01Icon, Briefcase02Icon, BrowserIcon, Brush01Icon, Brush02Icon, Brush03Icon, Building01Icon, Building02Icon, Building03Icon, Building04Icon, Building05Icon, Building06Icon, Building07Icon, Building08Icon, BusIcon, Button, type ButtonBaseProps, ButtonGroup, type ButtonGroupProps, type ButtonProps, CalculatorIcon, CalendarCheck01Icon, CalendarCheck02Icon, CalendarDateIcon, CalendarHeart01Icon, CalendarHeart02Icon, CalendarIcon, CalendarMinus01Icon, CalendarMinus02Icon, CalendarPlus01Icon, CalendarPlus02Icon, Camera01Icon, Camera02Icon, Camera03Icon, CameraLensIcon, CameraOffIcon, CameraPlusIcon, Car01Icon, Car02Icon, Certificate01Icon, Certificate02Icon, ChartBreakoutCircleIcon, ChartBreakoutSquareIcon, ChecboxIconSize, CheckBox, CheckBoxGroup, type CheckBoxGroupProps, type CheckBoxProps, CheckCircleBrokenIcon, CheckCircleIcon, CheckDone01Icon, CheckDone02Icon, CheckHeartIcon, CheckIcon, CheckSquareBrokenIcon, CheckSquareIcon, CheckVerified01Icon, CheckVerified02Icon, CheckVerified03Icon, ChevronDownDoubleIcon, ChevronDownIcon, ChevronLeftDoubleIcon, ChevronLeftIcon, ChevronRightDoubleIcon, ChevronRightIcon, ChevronSelectorHorizontalIcon, ChevronSelectorVerticalIcon, ChevronUpDoubleIcon, ChevronUpIcon, ChromeCastIcon, CircleCutIcon, CircleIcon, ClapperboardIcon, ClipboardAttachmentIcon, ClipboardCheckIcon, ClipboardDownloadIcon, ClipboardIcon, ClipboardMinusIcon, ClipboardPlusIcon, ClipboardXIcon, ClockCheckIcon, ClockFastForwardIcon, ClockIcon, ClockPlusIcon, ClockRefreshIcon, ClockRewindIcon, ClockSnoozeIcon, ClockStopwatchIcon, Cloud01Icon, Cloud02Icon, Cloud03Icon, CloudBlank01Icon, CloudBlank02Icon, CloudLightningIcon, CloudMoonIcon, CloudOffIcon, CloudRaining01Icon, CloudRaining02Icon, CloudRaining03Icon, CloudRaining04Icon, CloudRaining05Icon, CloudRaining06Icon, CloudSnowing01Icon, CloudSnowing02Icon, CloudSun01Icon, CloudSun02Icon, CloudSun03Icon, Code01Icon, Code02Icon, CodeBrowserIcon, CodeCircle01Icon, CodeCircle02Icon, CodeCircle03Icon, CodeSnippet01Icon, CodeSnippet02Icon, CodeSquare01Icon, CodeSquare02Icon, CodepenIcon, Coins01Icon, Coins02Icon, Coins03Icon, Coins04Icon, CoinsHandIcon, CoinsStacked01Icon, CoinsStacked02Icon, CoinsStacked03Icon, CoinsStacked04Icon, CoinsSwap01Icon, CoinsSwap02Icon, ColorsIcon, type ColumnType, Columns01Icon, Columns02Icon, Columns03Icon, type ColumnsType, CommandIcon, CompanyMiscIcon, Compass01Icon, Compass02Icon, Compass03Icon, CompassIcon, type Config, ContainerIcon, ContentDivider, type ContentDividerProps, Contrast01Icon, Contrast02Icon, Contrast03Icon, Copy01Icon, Copy02Icon, Copy03Icon, Copy04Icon, Copy05Icon, Copy06Icon, Copy07Icon, CornerDownLeftIcon, CornerDownRightIcon, CornerLeftDownIcon, CornerLeftUpIcon, CornerRightDownIcon, CornerRightUpIcon, CornerUpLeftIcon, CornerUpRightIcon, CpuChip01Icon, CpuChip02Icon, CreditCard01Icon, CreditCard02Icon, CreditCardCheckIcon, CreditCardDownIcon, CreditCardDownloadIcon, CreditCardEditIcon, CreditCardLockIcon, CreditCardMinusIcon, CreditCardPlusIcon, CreditCardRefreshIcon, CreditCardSearchIcon, CreditCardShieldIcon, CreditCardUpIcon, CreditCardUploadIcon, CreditCardXIcon, Crop01Icon, Crop02Icon, Cryptocurrency01Icon, Cryptocurrency02Icon, Cryptocurrency03Icon, Cryptocurrency04Icon, Cube01Icon, Cube02Icon, Cube03Icon, Cube04Icon, CubeOutlineIcon, CurrencyBitcoinCircleIcon, CurrencyBitcoinIcon, CurrencyDollarCircleIcon, CurrencyDollarIcon, CurrencyEthereumCircleIcon, CurrencyEthereumIcon, CurrencyEuroCircleIcon, CurrencyEuroIcon, CurrencyPoundCircleIcon, CurrencyPoundIcon, CurrencyRubleCircleIcon, CurrencyRubleIcon, CurrencyRupeeCircleIcon, CurrencyRupeeIcon, CurrencyYenCircleIcon, CurrencyYenIcon, Cursor01Icon, Cursor02Icon, Cursor03Icon, Cursor04Icon, CursorBoxIcon, CursorClick01Icon, CursorClick02Icon, DataIcon, type DataSourceType, Database01Icon, Database02Icon, Database03Icon, Dataflow01Icon, Dataflow02Icon, Dataflow03Icon, Dataflow04Icon, type DatasetsActivityGauge, type DatasetsBarChart, type DatasetsLineChart, type DatasetsPieChart, type DatasetsRadarChart, DatePicker, type DatePickerProps, DeleteIcon, Diamond01Icon, Diamond02Icon, Dice1Icon, Dice2Icon, Dice3Icon, Dice4Icon, Dice5Icon, Dice6Icon, Disc01Icon, Disc02Icon, DistributeSpacingHorizontalIcon, DistributeSpacingVerticalIcon, Divide01Icon, Divide02Icon, Divide03Icon, DividerIcon, DotCircleIcon, DotIcon, Dotpoints01Icon, Dotpoints02Icon, DotsGridIcon, DotsHorizontalIcon, DotsVerticalIcon, Download01Icon, Download02Icon, Download03Icon, Download04Icon, DownloadCloud01Icon, DownloadCloud02Icon, DropIcon, Dropdown, type DropdownMenuType, type DropdownProps, Droplets01Icon, Droplets02Icon, Droplets03Icon, DropperIcon, Edit01Icon, Edit02Icon, Edit03Icon, Edit04Icon, Edit05Icon, EmailTextField, EmptyState, type EmptyStateProps, EqualIcon, EqualNotIcon, EraserIcon, type ErrorDetails, Expand01Icon, Expand02Icon, Expand03Icon, Expand04Icon, Expand05Icon, Expand06Icon, type ExtendedScale, EyeIcon, EyeOffIcon, FaceContentIcon, FaceFrownIcon, FaceHappyIcon, FaceIdIcon, FaceIdSquareIcon, FaceNeutralIcon, FaceSadIcon, FaceSmileIcon, FaceWinkIcon, FastBackwardIcon, FastForwardIcon, FeatherIcon, FigmaIcon, File01Icon, File02Icon, File03Icon, File04Icon, File05Icon, File06Icon, File07Icon, FileAttachment01Icon, FileAttachment02Icon, FileAttachment03Icon, FileAttachment04Icon, FileAttachment05Icon, FileCheck01Icon, FileCheck02Icon, FileCheck03Icon, FileCode01Icon, FileCode02Icon, FileDownload01Icon, FileDownload02Icon, FileDownload03Icon, FileHeart01Icon, FileHeart02Icon, FileHeart03Icon, FileLock01Icon, FileLock02Icon, FileLock03Icon, FileMinus01Icon, FileMinus02Icon, FileMinus03Icon, FilePlus01Icon, FilePlus02Icon, FilePlus03Icon, FileQuestion01Icon, FileQuestion02Icon, FileQuestion03Icon, FileSearch01Icon, FileSearch02Icon, FileSearch03Icon, FileShield01Icon, FileShield02Icon, FileShield03Icon, FileX01Icon, FileX02Icon, FileX03Icon, Film01Icon, Film02Icon, Film03Icon, FilterFunnel01Icon, FilterFunnel02Icon, FilterLinesIcon, Fingerprint01Icon, Fingerprint02Icon, Fingerprint03Icon, Fingerprint04Icon, Flag01Icon, Flag02Icon, Flag03Icon, Flag04Icon, Flag05Icon, Flag06Icon, FlashIcon, FlashOffIcon, FlexAlignBottomIcon, FlexAlignLeftIcon, FlexAlignRightIcon, FlexAlignTopIcon, FlipBackwardIcon, FlipForwardIcon, FolderCheckIcon, FolderClosedIcon, FolderCodeIcon, FolderDownloadIcon, FolderIcon, FolderLockIcon, FolderMinusIcon, FolderPlusIcon, FolderQuestionIcon, FolderSearchIcon, FolderShieldIcon, FolderXIcon, FramerIcon, GamingPad01Icon, GamingPad02Icon, Gift01Icon, Gift02Icon, GitBranch01Icon, GitBranch02Icon, GitCommitIcon, GitMergeIcon, GitPullRequestIcon, Glasses01Icon, Glasses02Icon, Globe01Icon, Globe02Icon, Globe03Icon, Globe04Icon, Globe05Icon, Globe06Icon, GlobeSlated01Icon, GlobeSlated02Icon, GoogleChromeIcon, GraduationHat01Icon, GraduationHat02Icon, Grid01Icon, Grid02Icon, Grid03Icon, GridDotsBlankIcon, GridDotsBottomIcon, GridDotsHorizontalCenterIcon, GridDotsLeftIcon, GridDotsOuterIcon, GridDotsRightIcon, GridDotsTopIcon, GridDotsVerticalCenterIcon, HandIcon, HardDriveIcon, Hash01Icon, Hash02Icon, Heading01Icon, Heading02Icon, HeadingSquareIcon, Headphones01Icon, Headphones02Icon, HeartCircleIcon, HeartHandIcon, HeartHexagonIcon, HeartIcon, HeartOctagonIcon, HeartRoundedIcon, HeartSquareIcon, HeartsIcon, HelpCircleIcon, HelpHexagonIcon, HelpOctagonIcon, HelpSquareIcon, HelpTooltip, type HelpTooltipProps, type HelpingProps, Hexagon01Icon, Hexagon02Icon, Home01Icon, Home02Icon, Home03Icon, Home04Icon, Home05Icon, HomeLineIcon, HomeSmileIcon, HorizontalBarChart01Icon, HorizontalBarChart02Icon, HorizontalBarChart03Icon, Hourglass01Icon, Hourglass02Icon, Hourglass03Icon, Hurricane01Icon, Hurricane02Icon, Hurricane03Icon, type IconProps, Image01Icon, Image02Icon, Image03Icon, Image04Icon, Image05Icon, ImageCheckIcon, ImageDownIcon, ImageIndentLeftIcon, ImageIndentRightIcon, ImageLeftIcon, ImagePlusIcon, ImageRightIcon, ImageUpIcon, ImageUserCheckIcon, ImageUserDownIcon, ImageUserIcon, ImageUserLeftIcon, ImageUserPlusIcon, ImageUserRightIcon, ImageUserUpIcon, ImageUserXIcon, ImageXIcon, Inbox01Icon, Inbox02Icon, InfinityIcon, InfoCircleIcon, InfoHexagonIcon, InfoOctagonIcon, InfoSquareIcon, InputDropdown, type InputDropdownOption, type InputDropdownProps, IntersectCircleIcon, IntersectSquareIcon, Italic01Icon, Italic02Icon, ItalicSquareIcon, Key01Icon, Key02Icon, Keyboard01Icon, Keyboard02Icon, Laptop01Icon, Laptop02Icon, LayerSingleIcon, LayersThree01Icon, LayersThree02Icon, LayersTwo01Icon, LayersTwo02Icon, LayoutAlt01Icon, LayoutAlt02Icon, LayoutAlt03Icon, LayoutAlt04Icon, LayoutBottomIcon, LayoutGrid01Icon, LayoutGrid02Icon, LayoutLeftIcon, LayoutRightIcon, LayoutTopIcon, LeftIndent01Icon, LeftIndent02Icon, LetterSpacing01Icon, LetterSpacing02Icon, LifeBuoy01Icon, LifeBuoy02Icon, Lightbulb01Icon, Lightbulb02Icon, Lightbulb03Icon, Lightbulb04Icon, Lightbulb05Icon, Lightning01Icon, Lightning02Icon, LineChart, LineChartDown01Icon, LineChartDown02Icon, LineChartDown03Icon, LineChartDown04Icon, LineChartDown05Icon, type LineChartProps, LineChartUp01Icon, LineChartUp02Icon, LineChartUp03Icon, LineChartUp04Icon, LineChartUp05Icon, LineHeightIcon, Link01Icon, Link02Icon, Link03Icon, Link04Icon, Link05Icon, LinkBroken01Icon, LinkBroken02Icon, LinkExternal01Icon, LinkExternal02Icon, ListIcon, Loading01Icon, Loading02Icon, Loading03Icon, type LoadingIndicatorProps, LoadingIndicators, type LocaleTel, type Location, Lock01Icon, Lock02Icon, Lock03Icon, Lock04Icon, LockKeyholeCircleIcon, LockKeyholeSquareIcon, LockUnlocked01Icon, LockUnlocked02Icon, LockUnlocked03Icon, LockUnlocked04Icon, LogIn01Icon, LogIn02Icon, LogIn03Icon, LogIn04Icon, LogOut01Icon, LogOut02Icon, LogOut03Icon, LogOut04Icon, Luggage01Icon, Luggage02Icon, Luggage03Icon, MagicWand01Icon, MagicWand02Icon, Mail01Icon, Mail02Icon, Mail03Icon, Mail04Icon, Mail05Icon, Map01Icon, Map02Icon, MarkIcon, MarkerPin01Icon, MarkerPin02Icon, MarkerPin03Icon, MarkerPin04Icon, MarkerPin05Icon, MarkerPin06Icon, MastercardMiscIcon, Maximize01Icon, Maximize02Icon, MedicalCircleIcon, MedicalCrossIcon, MedicalSquareIcon, Menu01Icon, Menu02Icon, Menu03Icon, Menu04Icon, Menu05Icon, type MenuGroup, type MenuItem, MessageAlertCircleIcon, MessageAlertSquareIcon, MessageChatCircleIcon, MessageChatSquareIcon, MessageCheckCircleIcon, MessageCheckSquareIcon, MessageCircle01Icon, MessageCircle02Icon, MessageDotsCircleIcon, MessageDotsSquareIcon, MessageHeartCircleIcon, MessageHeartSquareIcon, MessageNotificationCircleIcon, MessageNotificationSquareIcon, MessagePlusCircleIcon, MessagePlusSquareIcon, MessageQuestionCircleIcon, MessageQuestionSquareIcon, MessageSmileCircleIcon, MessageSmileSquareIcon, MessageSquare01Icon, MessageSquare02Icon, MessageTextCircle01Icon, MessageTextCircle02Icon, MessageTextSquare01Icon, MessageTextSquare02Icon, MessageXCircleIcon, MessageXSquareIcon, Metric, type MetricProps, type MetricType, Microphone01Icon, Microphone02Icon, MicrophoneOff01Icon, MicrophoneOff02Icon, MicroscopeIcon, Minimize01Icon, Minimize02Icon, MinusCircleIcon, MinusIcon, MinusSquareIcon, Modal, type ModalProps, Modem01Icon, Modem02Icon, Monitor01Icon, Monitor02Icon, Monitor03Icon, Monitor04Icon, Monitor05Icon, Moon01Icon, Moon02Icon, MoonEclipseIcon, MoonStarIcon, MouseIcon, MoveIcon, MusicNote01Icon, MusicNote02Icon, MusicNotePlusIcon, NavigationPointer01Icon, NavigationPointer02Icon, NavigationPointerOff01Icon, NavigationPointerOff02Icon, type NotifOpts, type NotifPlacementType, Notification, NotificationBoxIcon, NotificationContext, NotificationMessageIcon, type NotificationProps, NotificationProvider, type NotificationProviderProps, NotificationTextIcon, OctagonIcon, OfflineMiscIcon, OnlineMiscIcon, PackageCheckIcon, PackageIcon, PackageMinusIcon, PackagePlusIcon, PackageSearchIcon, PackageXIcon, PageHeader, type PageHeaderAlign, type PageHeaderProps, type PageHeaderType, Pagination, type PaginationProps, PaintIcon, PaintPourIcon, PaletteIcon, PaperclipIcon, ParagraphSpacingIcon, ParagraphWrapIcon, PasscodeIcon, PasscodeLockIcon, PassportIcon, PauseCircleIcon, PauseSquareIcon, PenTool01Icon, PenTool02Icon, PenToolMinusIcon, PenToolPlusIcon, Pencil01Icon, Pencil02Icon, PencilLineIcon, PentagonIcon, Percent01Icon, Percent02Icon, Percent03Icon, Perspective01Icon, Perspective02Icon, Phone01Icon, Phone02Icon, PhoneCall01Icon, PhoneCall02Icon, PhoneHangUpIcon, PhoneIcon, PhoneIncoming01Icon, PhoneIncoming02Icon, PhoneOutgoing01Icon, PhoneOutgoing02Icon, PhonePauseIcon, PhonePlusIcon, PhoneXIcon, PieChart, PieChart01Icon, PieChart02Icon, PieChart03Icon, PieChart04Icon, type PieChartProps, PiggyBank01Icon, PiggyBank02Icon, Pilcrow01Icon, Pilcrow02Icon, PilcrowSquareIcon, Pin01Icon, Pin02Icon, PlaceholderIcon, type Placement, PlaneIcon, PlayCircleIcon, PlayIcon, PlaySquareIcon, PlusCircleIcon, PlusIcon, PlusSquareIcon, PodcastIcon, Power01Icon, Power02Icon, Power03Icon, PresentationChart01Icon, PresentationChart02Icon, PresentationChart03Icon, PrinterIcon, ProgressBar, type ProgressBarProps, ProgressCircle, type ProgressCircleProps, ProgressStepItem, type ProgressStepItemProps, type ProgressStepItemType, type ProgressStepSLineItemType, ProgressSteps, ProgressStepsLine, type ProgressStepsLineProps, ProgressStepsMinimalIcons, ProgressStepsMinimalIconsConnected, type ProgressStepsMinimalIconsConnectedProps, type ProgressStepsMinimalIconsProps, type ProgressStepsProps, PuzzlePiece01Icon, PuzzlePiece02Icon, QrCode01Icon, QrCode02Icon, RadarChart, type RadarChartProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, RangePicker, type RangePickerProps, ReceiptCheckIcon, ReceiptIcon, Recording01Icon, Recording02Icon, Recording03Icon, Reflect01Icon, Reflect02Icon, RefreshCcw01Icon, RefreshCcw02Icon, RefreshCcw03Icon, RefreshCcw04Icon, RefreshCcw05Icon, RefreshCw01Icon, RefreshCw02Icon, RefreshCw03Icon, RefreshCw04Icon, RefreshCw05Icon, Repeat01Icon, Repeat02Icon, Repeat03Icon, Repeat04Icon, ReverseLeftIcon, ReverseRightIcon, RichEditor, type RichEditorProps, RightIndent01Icon, RightIndent02Icon, Rocket01Icon, Rocket02Icon, RollerBrushIcon, type Route, RouteIcon, type RowSelectionRender, type RowSelectionType, Rows01Icon, Rows02Icon, Rows03Icon, Rss01Icon, Rss02Icon, RulerIcon, SafeIcon, Sale01Icon, Sale02Icon, Sale03Icon, Sale04Icon, Save01Icon, Save02Icon, Save03Icon, Scale01Icon, Scale02Icon, Scale03Icon, Scales01Icon, Scales02Icon, ScanIcon, Scissors01Icon, Scissors02Icon, ScissorsCut01Icon, ScissorsCut02Icon, SearchLgIcon, SearchMdIcon, SearchRefractionIcon, SearchSmIcon, type SelectionSelectFn, Send01Icon, Send02Icon, Send03Icon, Server01Icon, Server02Icon, Server03Icon, Server04Icon, Server05Icon, Server06Icon, Settings01Icon, Settings02Icon, Settings03Icon, Settings04Icon, Share01Icon, Share02Icon, Share03Icon, Share04Icon, Share05Icon, Share06Icon, Share07Icon, Shield01Icon, Shield02Icon, Shield03Icon, ShieldDollarIcon, ShieldOffIcon, ShieldPlusIcon, ShieldTickIcon, ShieldZapIcon, ShoppingBag01Icon, ShoppingBag02Icon, ShoppingBag03Icon, ShoppingCart01Icon, ShoppingCart02Icon, ShoppingCart03Icon, Shuffle01Icon, Shuffle02Icon, type SidebarNavType, SidebarNavigation, type SidebarNavigationBaseItem, type SidebarNavigationItem, type SidebarNavigationProps, Signal01Icon, Signal02Icon, Signal03Icon, SimcardIcon, SkewIcon, SkipBackIcon, SkipForwardIcon, SlashCircle01Icon, SlashCircle02Icon, SlashDividerIcon, SlashOctagonIcon, Slideout, type SlideoutProps, Slider, type SliderProps, type SliderRange, Sliders01Icon, Sliders02Icon, Sliders03Icon, Sliders04Icon, SmlProvider, Snowflake01Icon, Snowflake02Icon, type SortingType, SpacingHeight01Icon, SpacingHeight02Icon, SpacingWidth01Icon, SpacingWidth02Icon, Speaker01Icon, Speaker02Icon, Speaker03Icon, Speedometer01Icon, Speedometer02Icon, Speedometer03Icon, Speedometer04Icon, SquareIcon, StandIcon, Star01Icon, Star02Icon, Star03Icon, Star04Icon, Star05Icon, Star06Icon, Star07Icon, StarIcon, Stars01Icon, Stars02Icon, Stars03Icon, type StatusMiscIconProps, StatusMiscIconWrapper, StickerCircleIcon, StickerSquareIcon, StopCircleIcon, StopIcon, StopSquareIcon, Strikethrough01Icon, Strikethrough02Icon, StrikethroughSquareIcon, SubscriptIcon, SunIcon, SunSetting01Icon, SunSetting02Icon, SunSetting03Icon, SunriseIcon, SunsetIcon, SwitchHorizontal01Icon, SwitchHorizontal02Icon, SwitchVertical01Icon, SwitchVertical02Icon, type TabButtonType, Table, TableCell, type TableCellProps, TableHeader, TableHeaderCell, type TableHeaderCellProps, type TableHeaderProps, TableIcon, type TableLayout, type TableProps, TableRow, type TableRowProps, type TableRowSelection, Tablet01Icon, Tablet02Icon, Tabs, type TabsProps, Tag, Tag01Icon, Tag02Icon, Tag03Icon, TagCount, type TagCountProps, type TagProps, Target01Icon, Target02Icon, Target03Icon, Target04Icon, Target05Icon, type TelPrefixProps, TelTextField, type TelTextFieldProps, TelescopeIcon, TerminalBrowserIcon, TerminalCircleIcon, TerminalIcon, TerminalSquareIcon, TextField, type TextFieldProps, TextInputIcon, TextareaField, type TextareaFieldProps, Thermometer01Icon, Thermometer02Icon, Thermometer03Icon, ThermometerColdIcon, ThermometerWarmIcon, ThumbsDownIcon, ThumbsUpIcon, TickCircleIcon, TickIcon, Ticket01Icon, Ticket02Icon, Toggle, Toggle01LeftIcon, Toggle01RightIcon, Toggle02LeftIcon, Toggle02RightIcon, Toggle03LeftIcon, Toggle03RightIcon, type ToggleProps, Tool01Icon, Tool02Icon, Tooltip, type TooltipProps, TrainIcon, TramIcon, TransformIcon, Translate01Icon, Translate02Icon, Trash01Icon, Trash02Icon, Trash03Icon, Trash04Icon, TrendDown01Icon, TrendDown02Icon, TrendUp01Icon, TrendUp02Icon, TriangleIcon, Trophy01Icon, Trophy02Icon, Truck01Icon, Truck02Icon, Tv01Icon, Tv02Icon, Tv03Icon, Type01Icon, Type02Icon, TypeSquareIcon, TypeStrikethrough01Icon, TypeStrikethrough02Icon, Typo, type TypoProps, Umbrella01Icon, Umbrella02Icon, Umbrella03Icon, Underline01Icon, Underline02Icon, UnderlineSquareIcon, Upload01Icon, Upload02Icon, Upload03Icon, Upload04Icon, UploadCloud01Icon, UploadCloud02Icon, UsbFlashDriveIcon, User01Icon, User02Icon, User03Icon, UserCheck01Icon, UserCheck02Icon, UserCircleIcon, UserDown01Icon, UserDown02Icon, UserEditIcon, UserLeft01Icon, UserLeft02Icon, UserMinus01Icon, UserMinus02Icon, UserPlus01Icon, UserPlus02Icon, UserRight01Icon, UserRight02Icon, UserSquareIcon, UserUp01Icon, UserUp02Icon, UserX01Icon, UserX02Icon, Users01Icon, Users02Icon, Users03Icon, UsersCheckIcon, UsersDownIcon, UsersEditIcon, UsersLeftIcon, UsersMinusIcon, UsersPlusIcon, UsersRightIcon, UsersUpIcon, UsersXIcon, VariableIcon, VerifiedTickMiscIcon, VideoRecorderIcon, VideoRecorderOffIcon, VirusIcon, VoicemailIcon, VolumeMaxIcon, VolumeMinIcon, VolumeMinusIcon, VolumePlusIcon, VolumeXIcon, Wallet01Icon, Wallet02Icon, Wallet03Icon, Wallet04Icon, Wallet05Icon, WatchCircleIcon, WatchSquareIcon, WavesIcon, Webcam01Icon, Webcam02Icon, WebsiteTextField, type WebsiteTextFieldProps, WifiIcon, WifiOffIcon, Wind01Icon, Wind02Icon, Wind03Icon, XCircleIcon, XCloseIcon, XIcon, XSquareIcon, YoutubeIcon, ZapCircleIcon, ZapFastIcon, ZapIcon, ZapOffIcon, ZapSquareIcon, ZoomInIcon, ZoomOutIcon, useNotification };
