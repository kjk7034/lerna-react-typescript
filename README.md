# 개요

lerna로 프로젝트를 구성해서 추후 CI들을 연동 예정.

yarn workspace를 이용하여 작업.

lerna + react + typescript

## workspace 설정

`package.json`에 다음과 같이 정의
```json
...
"private": true,
"version": "0.0.0",
"workspaces": [
    "packages/components",
    "packages/shared",
    "packages/tools",
    "packages/siteA",
    "packages/siteB"
],
...
```

## 패키지 구조

```
packages 
|-- components 
|   # UI 공통 컴포넌트
|-- shared
|   # 공용 함수 정의
|-- tools
|   # 기본 개발 환경 정의
|-- sizeA
|   # A 사이트
|-- siteB
    # B 사이트
```

## 기본 폴더 설명

```
|-- lib
|   # 빌드 output
|-- config
|   # 개발환경 설정
|-- node_modules
|-- public
|   # 정적 리소스 정의
|-- src
|   # 작업 rootDir(compilerOptions)
|-- package.json 
    # 패키지 정보
```

## Typescript 환경 설정

`./tsconfig.json`를 기준으로 각 패키지에서 `extends`해서 사용.