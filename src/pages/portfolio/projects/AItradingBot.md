---
layout:  /src/layouts/ProjectLayout.astro
title: 'AI python trading bot'
pubDate: 2025-04-05
description: 'An autonomous AI trading bot that uses PPO to efficiently capture market trends.'
languages: ["python", "gymnasium", "pandas", "numpy","pytorch", "seaborn"]
image:
  url: "/images/projects/trade.webp"
  alt: "Thumbnail of Astro arches."
--- 
# 🔍 Overview

**ForexBot** is a fully autonomous, high-performance Forex trading system powered by deep reinforcement learning. Developed in Python 3.10, it leverages **Proximal Policy Optimization (PPO)** to deliver intelligent, real-time trade execution—completely free from traditional indicators or economic calendars. Designed with scalability, fault tolerance, and performance monitoring at its core, ForexBot operates with zero manual intervention.

---

# 🧩 Core Features

## 📈 Reinforcement Learning

- **Stable Baselines3 PPO**: Proven RL algorithm ensures consistent trade performance  
- **Custom Neural Architecture**: Learns directly from raw market data—no handcrafted features  
- **Dynamic Position Sizing**: Adapts to evolving market conditions to maximize returns  
- **Auto Hyperparameter Tuning**: Continuously optimizes strategy under live conditions  

## 🛡️ Risk Management

- **Configurable Trade Cap**: Enforces up to *6 trades/week* (user-defined) for disciplined exposure  
- **Robust Monitoring & Error Recovery**: Automatically handles exceptions and edge cases  
- **Fully Automated Lifecycle**: From order placement to position closure—ForexBot does it all  

## 📊 Market Data & Analytics

- **Extended Historical Data**: Bypasses Dukascopy's 3-year limit via auto-concatenation  
- **Live KPIs**: Profit factor, win rate, and rolling metrics—tracked episode by episode  
- **No Lagging Indicators**: Pure price-action strategy ensures reactive, unbiased decision-making  

---

# 💡 Technical Stack

## ⚙️ Core Framework

- Python 3.10 + PyTorch + Gymnasium  
- Streamlined with **TensorFlow removed** for reduced overhead  
- Efficient data handling via **pandas** and **NumPy**

## 📡 Trading Integration

- **MetaTrader 5 Bridge**: Seamless execution and portfolio management  
- **Full Audit Trail**: All trades logged with reproducibility in mind  
- **Tunable Parameters**: User-defined risk and sizing strategies via YAML config or CLI  

## 🚀 Performance Optimization

- **GPU Support**: Accelerated training with DirectML, OpenCL, and torch-directml  
- **Memory-Conscious Structures**: Optimized for both backtesting and live environments  

## 📊 Visualization & Monitoring

- **Interactive Dashboards**: Trade insights at a glance  
- **Weights & Biases Integration**: Intuitive experiment logging and comparison  

---

# 📈 Performance Highlights

- **Efficiency Gains**: Automation and dynamic sizing outperform manual strategies  
- **Stability**: 99.9% uptime, with resilient exception handling  
- **Low Latency**: GPU-powered, near-real-time inference and execution  

---

# 🔮 Roadmap

## 🚀 Smarter Market Intelligence

- Regime detection and pattern mining  
- Context-aware adjustments and multi-agent learning  

## 🛠️ System Enhancements

- Faster data pipelines  
- Enhanced GPU throughput and model compression  

---

> Ready to explore the codebase? Dive into the full repo and see the engine under the hood.


## 🌐 Github repo

👉 [Repo](https://github.com/Stefodan21/Forex-trading-bot)




